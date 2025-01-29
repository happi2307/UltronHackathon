// Home Page 
import { useContext } from "react";
import { AppContext } from "../context/appcontext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const { user, transactions, budget } = useContext(AppContext);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome, {user ? user.name : "Guest"}!
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Manage your finances easily and make smarter decisions.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Transactions Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="p-6 bg-white rounded-2xl shadow-lg text-gray-800">
            <CardContent>
              <h3 className="text-xl font-semibold">Recent Transactions</h3>
              <p className="text-lg">{transactions.length} recorded</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Budget Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="p-6 bg-white rounded-2xl shadow-lg text-gray-800">
            <CardContent>
              <h3 className="text-xl font-semibold">Monthly Budget</h3>
              <p className="text-lg">${budget?.spent} / ${budget?.monthlyLimit}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Investment Insights */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="p-6 bg-white rounded-2xl shadow-lg text-gray-800">
            <CardContent>
              <h3 className="text-xl font-semibold">Investment Insights</h3>
              <p className="text-lg">Analyze and grow your wealth</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Link to="/dashboard">
        <Button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 text-lg rounded-xl shadow-md">
          Go to Dashboard
        </Button>
      </Link>
    </motion.div>
  );
};

export default Home;
