const axios = require('axios');

async function testAPI() {
  const baseURL = 'http://localhost:5000/api';
  
  try {
    // Test registration
    const registerResponse = await axios.post(`${baseURL}/auth/register`, {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    console.log('✅ Registration API:', registerResponse.status === 201);

    // Test login
    const loginResponse = await axios.post(`${baseURL}/auth/login`, {
      email: 'test@example.com',
      password: 'password123'
    });
    console.log('✅ Login API:', loginResponse.status === 200);
    
    // Store token
    const token = loginResponse.data.token;
    
    // Test protected route
    const transactionResponse = await axios.get(`${baseURL}/transactions`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ Protected Route:', transactionResponse.status === 200);

    return true;
  } catch (error) {
    console.error('❌ API Test Error:', error.response?.data || error.message);
    return false;
  }
}

module.exports = testAPI; 