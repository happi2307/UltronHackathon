import { useContext } from "react";
import { AppContext } from "../context/appcontext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrendingUp, TrendingDown, BarChart2 } from "lucide-react";
import { format } from "date-fns";

const Investments = () => {
  const { investments } = useContext(AppContext);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center text-center p-8 bg-gradient-to-br from-green-500 to-teal-500 text-white"
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
        Investment Portfolio
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Track your investments and monitor their performance.
      </motion.p>

      <motion.div
        className="w-full max-w-3xl p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6 bg-white rounded-2xl shadow-lg text-gray-800">
          <CardContent className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-center">Your Investments</h3>

            <ScrollArea className="max-h-80">
              {investments.length > 0 ? (
                investments.map((investment, index) => (
                  <motion.div
                    key={investment.id}
                    className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-3 hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      {investment.change >= 0 ? (
                        <TrendingUp className="text-green-500" size={24} />
                      ) : (
                        <TrendingDown className="text-red-500" size={24} />
                      )}
                      <div>
                        <p className="font-semibold">{investment.name}</p>
                        <p className="text-sm text-gray-500">{format(new Date(investment.date), "PPP")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-bold">${investment.amount}</p>
                      <p
                        className={`text-sm font-bold ${
                          investment.change >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {investment.change >= 0 ? "+" : "-"}{investment.change}%
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No investments found.</p>
              )}
            </ScrollArea>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-xl shadow-md">
                Add Investment
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Investments;
