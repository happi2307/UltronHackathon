import { useContext } from "react";
import { AppContext } from "../context/appcontext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { DollarSign, ArrowDown, ArrowUp } from "lucide-react";

const Transactions = () => {
  const { transactions } = useContext(AppContext);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center text-center p-8 bg-gradient-to-br from-purple-500 to-indigo-500 text-white"
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
        Transaction History
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        View all your recent transactions in one place.
      </motion.p>

      <motion.div
        className="w-full max-w-3xl p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6 bg-white rounded-2xl shadow-lg text-gray-800">
          <CardContent className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-center">Recent Transactions</h3>

            <ScrollArea className="max-h-80">
              {transactions.length > 0 ? (
                transactions.map((tx, index) => (
                  <motion.div
                    key={tx.id}
                    className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-3 hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      {tx.type === "income" ? (
                        <ArrowUp className="text-green-500" size={24} />
                      ) : (
                        <ArrowDown className="text-red-500" size={24} />
                      )}
                      <div>
                        <p className="font-semibold">{tx.description}</p>
                        <p className="text-sm text-gray-500">{format(new Date(tx.date), "PPP")}</p>
                      </div>
                    </div>
                    <p
                      className={`text-lg font-bold ${
                        tx.type === "income" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {tx.type === "income" ? "+" : "-"}${tx.amount}
                    </p>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No transactions found.</p>
              )}
            </ScrollArea>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-xl shadow-md">
                Add Transaction
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Transactions;
// Transactions Page 
