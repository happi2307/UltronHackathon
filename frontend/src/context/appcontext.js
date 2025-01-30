import { createContext, useState, useEffect } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  // Global States
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [budget, setBudget] = useState({
    monthlyLimit: 0,
    spent: 0,
    categories: {},
    savings: 0
  });
  const [investments, setInvestments] = useState([]);
  const [financialGoals, setFinancialGoals] = useState([]);
  const [analytics, setAnalytics] = useState({
    monthlySpending: [],
    savingsRate: 0,
    investmentReturns: 0
  });

  // Fetch data (mocked example, replace with API calls)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API calls
        const userData = await fetch('/api/user');
        const transactionsData = await fetch('/api/transactions');
        const budgetData = await fetch('/api/budget');
        const investmentsData = await fetch('/api/investments');
        const analyticsData = await fetch('/api/analytics');
        const goalsData = await fetch('/api/goals');

        // Set states with real data
        setUser(userData);
        setTransactions(transactionsData);
        setBudget(budgetData);
        setInvestments(investmentsData);
        setAnalytics(analyticsData);
        setFinancialGoals(goalsData);
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
        financialGoals,
        analytics,
        setUser,
        setTransactions,
        setBudget,
        setInvestments,
        setFinancialGoals,
        setAnalytics
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
