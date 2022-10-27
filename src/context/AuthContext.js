import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: { username: "jakiechan", tagline: "", bio: "" },
  });
  return (
    <Provider
      value={{
        authState,
        setAuthState,
      }}>
      {children}
    </Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return authContext;
};

export { AuthProvider, useAuth };
