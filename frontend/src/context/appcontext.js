import { createContext, useState, useEffect } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  // Global States
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [budget, setBudget] = useState([]);
  const [investments, setInvestments] = useState([]);

  // Fetch data (mocked example, replace with API calls)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock API calls - Replace with real API calls
        const userData = { name: "John Doe", email: "john@example.com" };
        const transactionsData = [
          { id: 1, title: "Grocery", amount: -50 },
          { id: 2, title: "Salary", amount: 2000 },
        ];
        const budgetData = { monthlyLimit: 500, spent: 200 };
        const investmentsData = [{ id: 1, type: "Stocks", amount: 1000 }];

        // Set states
        setUser(userData);
        setTransactions(transactionsData);
        setBudget(budgetData);
        setInvestments(investmentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        transactions,
        budget,
        investments,
        setUser,
        setTransactions,
        setBudget,
        setInvestments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
