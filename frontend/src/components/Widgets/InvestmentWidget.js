import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appcontext';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import { investmentAPI } from '../../services/api';

const InvestmentWidget = () => {
  const { investments } = useContext(AppContext);
  const [totalValue, setTotalValue] = useState(0);
  const [returns, setReturns] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      const total = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
      const totalReturns = investments.reduce(
        (sum, inv) => sum + (inv.currentValue - inv.initialValue),
        0
      );
      
      setTotalValue(total);
      setReturns(totalReturns);
    };

    calculateTotals();
  }, [investments]);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Investment Portfolio</h3>
        <FaChartLine className="text-blue-500 text-xl" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Total Value</p>
          <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Returns</p>
          <p className={`text-2xl font-bold ${returns >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {returns >= 0 ? '+' : ''}{returns.toLocaleString()}%
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2">Asset Allocation</h4>
        {investments.map((investment) => (
          <div key={investment.id} className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">{investment.name}</span>
            <span className="text-sm font-medium">
              ${investment.currentValue.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InvestmentWidget; 