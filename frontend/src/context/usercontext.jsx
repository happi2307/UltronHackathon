import React, { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User financial data
  const [budget, setBudget] = useState(5000); // Initial budget
  const [invested, setInvested] = useState(2000); // Initial invested amount
  const [transactions, setTransactions] = useState([
    { description: "Groceries", amount: -150 },
    { description: "Salary", amount: 3000 },
    { description: "Rent", amount: -1200 },
  ]);

  // Context provider
  return (
    <UserContext.Provider
      value={{ budget, setBudget, invested, setInvested, transactions, setTransactions }}
    >
      {children}
    </UserContext.Provider>
  );
};
