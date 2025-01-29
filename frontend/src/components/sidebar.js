import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaChartLine, FaWallet, FaPiggyBank } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button
        className="p-3 text-white bg-gray-900 fixed top-4 left-4 rounded-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-64 shadow-lg`}
      >
        <h2 className="text-xl font-bold mb-6">Ultron Hack</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaChartLine className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/transactions" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaWallet className="mr-2" /> Transactions
            </Link>
          </li>
          <li>
            <Link to="/budget" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaPiggyBank className="mr-2" /> Budget
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Shift on Sidebar Open */}
      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Your main content here */}
        <h1 className="text-2xl font-bold">Welcome to Ultron Hack</h1>
      </div>
    </div>
  );
};

export default Sidebar;