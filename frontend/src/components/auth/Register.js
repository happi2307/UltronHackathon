import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/appcontext';
import { userAPI } from '../../services/api';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userAPI.register(formData);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-bold">Create Account</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div className="text-red-500 text-center">{error}</div>
          )}
          <div className="rounded-md shadow-sm space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Register
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Register; 