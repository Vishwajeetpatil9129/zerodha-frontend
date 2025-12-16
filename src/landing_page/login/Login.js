import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // FIX 1: Add "/login" to the end of the URL
      // FIX 2: Remove { withCredentials: true }
      const { data } = await axios.post(
        "https://zerodha-clone-qujx.onrender.com/login",
        { ...inputValue }
      );
      
      const { success, message } = data;
      
      if (success) {
        alert("Login Successful!");
        // FIX 3: Redirect to home/dashboard without hardcoding "localhost"
        // Since your dashboard is likely on the main frontend, you can redirect to root "/" 
        // or specifically to a dashboard route if you have one setup in main.js
        window.location.href = "https://zerodha-frontend.vercel.app/"; 
        // Note: Once you deploy frontend, you'll put your Vercel link here or just use "/"
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
    
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="text-center mb-4">
            <h2>Login</h2>
            <p className="text-muted">Welcome back to Echo Exchange</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <div className="mt-3 text-center">
            <p className="text-muted">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;