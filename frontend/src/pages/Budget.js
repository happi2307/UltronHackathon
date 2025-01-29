import { useContext } from "react";
import { AppContext } from "../context/appcontext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const spentPercentage = ((budget?.spent / budget?.monthlyLimit) * 100).toFixed(1);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-blue-500 to-green-500 text-white"
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
        Monthly Budget
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Track your expenses and stay within your budget.
      </motion.p>

      <motion.div
        className="w-full max-w-3xl p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6 bg-white rounded-2xl shadow-lg text-gray-800">
          <CardContent className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Total Budget</h3>
            <p className="text-2xl font-bold">${budget?.monthlyLimit}</p>

            <div className="w-full mt-6">
              <p className="text-lg text-gray-600">Spent: ${budget?.spent}</p>
              <Progress value={spentPercentage} className="h-4 mt-2" />
              <p className="text-sm text-gray-500 mt-2">{spentPercentage}% of budget used</p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-lg rounded-xl shadow-md">
                Adjust Budget
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Budget;
