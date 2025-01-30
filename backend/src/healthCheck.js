const testConnections = require('./tests/dbTest');
const testAPI = require('./tests/apiTest');

async function runHealthCheck() {
  console.log('🔍 Starting Health Check...\n');

  // Check Node.js version
  console.log('Node Version:', process.version);
  
  // Check npm packages
  console.log('\n📦 Checking Dependencies...');
  const packageJson = require('../package.json');
  console.log('Dependencies:', Object.keys(packageJson.dependencies).length);
  
  // Check database connections
  console.log('\n🔌 Testing Database Connections...');
  const dbStatus = await testConnections();
  
  // Check API endpoints
  console.log('\n🌐 Testing API Endpoints...');
  const apiStatus = await testAPI();
  
  // Summary
  console.log('\n📋 Health Check Summary:');
  console.log('- Databases:', dbStatus ? '✅' : '❌');
  console.log('- API Endpoints:', apiStatus ? '✅' : '❌');
  
  return dbStatus && apiStatus;
}

// Run the health check
runHealthCheck().then(status => {
  if (status) {
    console.log('\n✅ All systems operational!');
  } else {
    console.log('\n❌ Some checks failed. Please review the logs above.');
  }
}); 