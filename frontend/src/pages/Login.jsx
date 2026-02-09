// src/components/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(null)

  const {login} = useAuth()
  const Navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/api/auth/login" ,
          {email, password} ,
          { headers: { "Content-Type": "application/json" } }
        )
        if(response.data.success){
          login(response.data.user)
          localStorage.setItem("token" , response.data.token)
          if(response.data.user.role === "admin") {
            Navigate('/admin-dashboard')
          } else {
            Navigate('/employee-dashboard')
          }
        }
      } catch (error) {
        if(error.response && !error.response.data.success){
          setError(error.response.data.error)
        } else {
          setError('Something went wrong!')
        }
      }  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#1B2D59]">
          Employee Management System
        </h1>
        {error && <p className="text-red-500" >{error}</p> }
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D1A783]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D1A783]"
            />
          </div>

          {/* Remember & Forget Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 text-[#1B2D59] border-gray-300 rounded focus:ring-[#D1A783]"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-[#D1A783] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#1B2D59] text-white font-semibold rounded hover:bg-[#16244b] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
