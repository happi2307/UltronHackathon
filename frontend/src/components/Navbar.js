import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">UltronHack</Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
        <li>
          <Link to="/investments">Investments</Link>
        </li>
      </div>
      <div className="user-profile">
        <Link to="/profile">Profile</Link>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
