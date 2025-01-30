import React, { useState, useContext } from "react";
import { UserContext } from "../context/usercontext";
import "../styles/chatai.css";

const ChatAI = () => {
  const { budget, invested, transactions } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    const aiResponse = generateAIResponse(userInput);
    const botMessage = { sender: "bot", text: aiResponse };
    
    setTimeout(() => setMessages((prev) => [...prev, botMessage]), 1000);
    setUserInput("");
  };

  // AI Response Simulation
  const generateAIResponse = (input) => {
    input = input.toLowerCase();

    if (input.includes("budget")) {
      return `Your current budget is $${budget.toLocaleString()}.`;
    } else if (input.includes("invested")) {
      return `You have invested $${invested.toLocaleString()}.`;
    } else if (input.includes("transactions")) {
      return `Your recent transactions include: ${transactions
        .map((tx) => `${tx.description} ($${tx.amount})`)
        .join(", ")}.`;
    } else if (input.includes("savings") || input.includes("save money")) {
      return `Based on your budget and expenses, you should aim to save at least $${(budget * 0.2).toFixed(2)} per month.`;
    } else {
      return "I'm here to help with your finances! Ask me about your budget, investments, or savings.";
    }
  };

  return (
    <div className="chat-container">
      <h1>AI Financial Assistant</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Ask me about your finances..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatAI;
