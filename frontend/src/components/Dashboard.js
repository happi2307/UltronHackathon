import { motion } from "framer-motion";
import ExpenseWidget from "../components/Widgets/ExpensesWidget";
import BudgetWidget from "../components/Widgets/BudgetWidget";
import InvestmentWidget from "../components/Widgets/InvestmentWidget";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard
        </motion.h1>

        {/* Grid Layout for Widgets */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ExpenseWidget />
          <BudgetWidget />
          <InvestmentWidget />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;// Dashboard Component 
