// src/context/authContext.jsx
import React, { createContext, useState, useContext } from "react";

// ✅ Create a proper context
const AuthContext = createContext();

// ✅ Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // optionally store token: localStorage.setItem("token", token)
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
