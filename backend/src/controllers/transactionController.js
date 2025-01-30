const Transaction = require('../models/mongodb/Transaction');
const Budget = require('../models/postgres/Budget');
const { sequelize } = require('../config/postgres');

exports.createTransaction = async (req, res) => {
  const t = await sequelize.transaction();
  
  try {
    const transaction = new Transaction({
      userId: req.user._id,
      ...req.body
    });
    await transaction.save();

    // Update budget in PostgreSQL
    if (req.body.type === 'expense') {
      await Budget.increment('spent', {
        by: req.body.amount,
        where: { 
          userId: req.user._id.toString(),
          month: new Date().toISOString().substring(0, 7)
        },
        transaction: t
      });
    }

    await t.commit();
    res.status(201).json(transaction);
  } catch (error) {
    await t.rollback();
    res.status(400).json({ error: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ 
      userId: req.user._id,
      date: {
        $gte: new Date(req.query.startDate || '1970-01-01'),
        $lte: new Date(req.query.endDate || Date.now())
      }
    }).sort({ date: -1 });
    
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 