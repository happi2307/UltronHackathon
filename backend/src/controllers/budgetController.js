const Budget = require('../models/postgres/Budget');
const Transaction = require('../models/mongodb/Transaction');

exports.getBudget = async (req, res) => {
  try {
    const currentMonth = new Date().toISOString().substring(0, 7);
    
    const [budget, transactions] = await Promise.all([
      Budget.findOne({
        where: { 
          userId: req.user._id.toString(),
          month: currentMonth
        }
      }),
      Transaction.aggregate([
        {
          $match: {
            userId: req.user._id,
            type: 'expense',
            date: {
              $gte: new Date(currentMonth + '-01'),
              $lte: new Date()
            }
          }
        },
        {
          $group: {
            _id: '$category',
            total: { $sum: '$amount' }
          }
        }
      ])
    ]);

    const categorySpending = transactions.reduce((acc, curr) => {
      acc[curr._id] = curr.total;
      return acc;
    }, {});

    res.json({
      ...budget.toJSON(),
      categorySpending
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBudget = async (req, res) => {
  try {
    const currentMonth = new Date().toISOString().substring(0, 7);
    
    const [budget, updated] = await Budget.upsert({
      userId: req.user._id.toString(),
      month: currentMonth,
      ...req.body
    });

    res.json(budget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 