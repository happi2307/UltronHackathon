import React, { useContext, useState, useEffect } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { AppContext } from '../../contexts/AppContext';

const ExpenseWidget = () => {
  const { budget, transactions } = useContext(AppContext);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    // Calculate total expenses
    const totalExpenses = transactions
      .filter(tx => tx.type === 'expense')
      .reduce((acc, tx) => acc + tx.amount, 0);

    // Animate the counter
    let start = 0;
    const duration = 1500;
    const increment = totalExpenses / (duration / 30);

    const interval = setInterval(() => {
      start += increment;
      if (start >= totalExpenses) {
        start = totalExpenses;
        clearInterval(interval);
      }
      setExpense(start.toFixed(2));
    }, 30);

    return () => clearInterval(interval);
  }, [transactions]);

  // Calculate percentage of budget spent
  const budgetPercentage = (expense / budget.monthlyLimit) * 100;

  return (
    <div className="flex items-center justify-center">
      <div className="relative group w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 p-3 rounded-full shadow-lg group-hover:bg-blue-600 transition-all duration-300">
          <FaMoneyBillWave className="text-white text-2xl" />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Monthly Expenses</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-200 mt-2">
            ${expense}
          </p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  budgetPercentage > 90 ? 'bg-red-500' : 
                  budgetPercentage > 75 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {budgetPercentage.toFixed(1)}% of budget used
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="text-center">
            <p className="text-gray-500">Remaining</p>
            <p className="font-semibold">${(budget.monthlyLimit - expense).toFixed(2)}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Daily Avg</p>
            <p className="font-semibold">${(expense / 30).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseWidget; 