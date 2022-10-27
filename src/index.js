import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { CounterProvider } from "./context/CounterContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
