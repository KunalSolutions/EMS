// src/context/authContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

// ✅ Create a proper context
const AuthContext = createContext();

// ✅ Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
    const verifyUser = async () => {
        try {
          const token = localStorage.getItem('token')
          if(token) {

          const response = await axios.get('http://localhost:5000/api/auth/verify', {
            Headers: {
              "Authorization" : `Bearer ${token}`
            }
          }) 
          if (response.data.success){
            setUser(response.data.user)
          }
        } else {
          setUser(null)
        }
        } catch (error) {
          if(error.response && !error.response.data.user.error )
            setUser(null)
        } finally {
          setLoading(false)
        }
    }
    verifyUser()
  }, [])

  const login = (userData) => {
    setUser(userData);
    // optionally store token: localStorage.setItem("token", token)
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
