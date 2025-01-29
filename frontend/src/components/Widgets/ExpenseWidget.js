import React, { useState, useEffect } from "react";
import { FaMoneyBillWave } from "react-icons/fa";

const ExpenseWidget = () => {
  const [expense, setExpense] = useState(0);
  const targetExpense = 1250.75; // Example expense amount

  // Smooth counter animation
  useEffect(() => {
    let start = 0;
    const duration = 1500; // Animation duration in ms
    const increment = targetExpense / (duration / 30);

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetExpense) {
        start = targetExpense;
        clearInterval(interval);
      }
      setExpense(start.toFixed(2));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative group w-64 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        {/* Icon */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 p-3 rounded-full shadow-lg group-hover:bg-blue-600 transition-all duration-300">
          <FaMoneyBillWave className="text-white text-2xl" />
        </div>

        {/* Content */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Total Expenses</h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-200 mt-2 transition-all duration-500">
            ${expense}
          </p>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ExpenseWidget;