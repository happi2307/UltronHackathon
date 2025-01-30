import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/userprofile.css";

const UserProfile = () => {
  const { budget, setBudget, invested, setInvested } = useContext(UserContext);
  const [newBudget, setNewBudget] = useState(budget);
  const [newInvested, setNewInvested] = useState(invested);

  const handleBudgetUpdate = (e) => {
    e.preventDefault();
    setBudget(newBudget);
  };

  const handleInvestedUpdate = (e) => {
    e.preventDefault();
    setInvested(newInvested);
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="user-card">
        <h2>Your Financial Overview</h2>
        <p><strong>Budget:</strong> ${budget.toLocaleString()}</p>
        <p><strong>Invested:</strong> ${invested.toLocaleString()}</p>
      </div>

      <div className="update-forms">
        <form onSubmit={handleBudgetUpdate}>
          <label>Update Budget:</label>
          <input
            type="number"
            value={newBudget}
            onChange={(e) => setNewBudget(Number(e.target.value))}
            required
          />
          <button type="submit">Update</button>
        </form>

        <form onSubmit={handleInvestedUpdate}>
          <label>Update Invested Amount:</label>
          <input
            type="number"
            value={newInvested}
            onChange={(e) => setNewInvested(Number(e.target.value))}
            required
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
