const { sequelize } = require('./postgres');
const connectMongoDB = require('./mongodb');

const initializeDatabases = async () => {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Connect to PostgreSQL and sync models
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    console.log('✅ All databases initialized successfully');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
};

module.exports = initializeDatabases; 