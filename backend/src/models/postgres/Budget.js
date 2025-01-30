const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/postgres');

const Budget = sequelize.define('Budget', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monthlyLimit: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categories: {
    type: DataTypes.JSONB,
    defaultValue: {},
  },
  month: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  spent: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  savings: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
});

module.exports = Budget; 