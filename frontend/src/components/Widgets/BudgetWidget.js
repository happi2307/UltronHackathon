import { motion } from "framer-motion";
import { useState } from "react";

const BudgetWidget = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-64 p-4 bg-blue-600 text-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-lg font-semibold">Monthly Budget</h3>
      <p className="text-xl font-bold">$1,200</p>

      {/* Animated Hover Card */}
      {hovered && (
        <motion.div
          className="absolute inset-0 bg-blue-700 p-4 flex flex-col justify-center items-center rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <p className="text-sm">Spent: $800</p>
          <p className="text-sm">Remaining: $400</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BudgetWidget;