import React, { useContext } from 'react';
import { AppContext } from '../../context/appcontext';
import { motion } from 'framer-motion';
import { FaPiggyBank } from 'react-icons/fa';

const BudgetWidget = () => {
  const { budget } = useContext(AppContext);
  const spentPercentage = (budget.spent / budget.monthlyLimit) * 100;

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Monthly Budget</h3>
        <FaPiggyBank className="text-green-500 text-xl" />
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Spent</span>
          <span className="font-medium">${budget.spent.toLocaleString()}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getProgressColor(spentPercentage)}`}
            style={{ width: `${Math.min(spentPercentage, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm text-gray-500">
            {spentPercentage.toFixed(1)}% used
          </span>
          <span className="text-sm text-gray-500">
            ${budget.monthlyLimit.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {Object.entries(budget.categories).map(([category, limit]) => (
          <div key={category}>
            <p className="text-sm text-gray-600">{category}</p>
            <p className="font-medium">
              ${(budget.categorySpending[category] || 0).toLocaleString()} / ${limit.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BudgetWidget;