import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { budget, invested, transactions } = useContext(UserContext);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h2>Budget</h2>
          <p>${budget.toLocaleString()}</p>
        </div>
        <div className="card">
          <h2>Invested</h2>
          <p>${invested.toLocaleString()}</p>
        </div>
      </div>

      <div className="transactions">
        <h2>Recent Transactions</h2>
        <ul>
          {transactions.length > 0 ? (
            transactions.map((tx, index) => (
              <li key={index} className="transaction-item">
                <span>{tx.description}</span>
                <span className={tx.amount < 0 ? "expense" : "income"}>
                  ${tx.amount.toLocaleString()}
                </span>
              </li>
            ))
          ) : (
            <p>No transactions yet</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
