import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css"; // Import the CSS file for animations

const Navbar = () => {
  const location = useLocation(); // Get current page location

  return (
    <nav className="navbar">
      <div className="logo">FinFlow</div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === "/user" ? "active" : ""}>
          <Link to="/user">User</Link>
        </li>
        <li className={location.pathname === "/chat" ? "active" : ""}>
          <Link to="/chat">AI Chat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
