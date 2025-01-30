import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import DashboardPage from "./pages/dashboardpage";
import UserPage from "./pages/userpage";
import ChatPage from "./pages/ChatPage";
import { UserProvider } from "./context/usercontext";  // Import the UserProvider

import "./styles/global.css"; // Import global styles
import "./styles/animations.css"; // Import animations styles

const App = () => {
  return (
    <UserProvider> {/* Wrap the entire app in UserProvider to provide context */}
      <Router>
        <Navbar /> {/* The Navbar component is available globally */}
        <div className="container">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
