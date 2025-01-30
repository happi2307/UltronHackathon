import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Main app component
import { UserProvider } from "./context/usercontext"; // Import UserProvider to wrap the app
import "./styles/global.css"; // Global styles for the app

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider> {/* Wrap the app with UserProvider to share the user data */}
    <App />
  </UserProvider>
);
