# Personal Finance Tracker - Hackathon Project

A full-stack personal finance application built with the MERN stack and PostgreSQL.

## Features

- User Authentication
- Transaction Tracking
- Budget Management
- Investment Portfolio
- Expense Analytics

## Tech Stack

- Frontend: React, TailwindCSS, Framer Motion
- Backend: Node.js, Express
- Databases: MongoDB (user data & transactions), PostgreSQL (analytics)
- Authentication: JWT

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Set up environment variables:
Create `.env` files in both frontend and backend directories.

4. Start the application:
```bash
# Start backend
cd backend && npm start

# Start frontend (in a new terminal)
cd frontend && npm start
```

## API Endpoints

- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- GET /api/transactions - Get user transactions
- POST /api/transactions - Create new transaction