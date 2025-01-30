// Create this file to test database connections
const mongoose = require('mongoose');
const { sequelize } = require('../config/postgres');

async function testConnections() {
  try {
    // Test MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connection Successful');
    
    // Test PostgreSQL
    await sequelize.authenticate();
    console.log('✅ PostgreSQL Connection Successful');
    
    return true;
  } catch (error) {
    console.error('❌ Database Connection Error:', error);
    return false;
  }
}

module.exports = testConnections; 