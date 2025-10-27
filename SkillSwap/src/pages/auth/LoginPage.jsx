import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  // Notification State
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      showMessage("✅ Login Successful!", "success");
      onLogin();
      setTimeout(() => navigate("/find-skills"), 1200);
  };

  return (
    <div className="login-wrapper">

      {/* Notification Box */}
      {message && (
        <div className={`notification-box ${messageType}`}>
          {message}
        </div>
      )}

      <form className="login-box" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Log in to continue your SkillSwap journey</p>

        {/* Email Field */}
        <div className="input-group">
          <i className="fas fa-envelope input-icon"></i>
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        {/* Password Field */}
        <div className="input-group">
          <i className="fas fa-lock input-icon"></i>
          <input 
            type={showPass ? "text" : "password"}
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <i 
            className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"} password-toggle`} 
            onClick={() => setShowPass(!showPass)}
          ></i>
        </div>

        <div className="forgot-link" onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </div>

        <button className="login-btn" type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account? 
          <span onClick={() => navigate("/signup")}> Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
