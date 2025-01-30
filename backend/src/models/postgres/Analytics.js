const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/postgres');

const Analytics = sequelize.define('Analytics', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monthlySpending: {
    type: DataTypes.JSONB,
    defaultValue: {},
  },
  categoryBreakdown: {
    type: DataTypes.JSONB,
    defaultValue: {},
  },
  savingsRate: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  investmentReturns: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  month: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = Analytics; 