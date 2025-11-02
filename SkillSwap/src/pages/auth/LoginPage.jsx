import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { loginUser } from "../../api/authApis";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // Notification State
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return showMessage("⚠ Please fill in all fields!", "error");
    }

    try {
      setLoading(true); // ✅ Start loading
      const data = await loginUser({ email, password });
      localStorage.setItem("userInfo", JSON.stringify(data));
      showMessage("✅ Login Successful!", "success");
      onLogin();
      setTimeout(() => navigate("/find-skills"), 1200);
    } catch (error) {
      console.log("Error while logging in", error);
      showMessage("❌ Login failed! Please try again.", "error");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="login-wrapper">
      {/* ✅ Notification Box */}
      {message && (
        <div className={`notification-box ${messageType}`}>
          {message}
        </div>
      )}

      <form className="login-box" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">
          Log in to continue your SkillSwap journey
        </p>

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
            className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"
              } password-toggle`}
            onClick={() => setShowPass(!showPass)}
          ></i>
        </div>

        <div
          className="forgot-link"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </div>

        <button
          className={`login-btn ${loading ? "loading" : ""}`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="spinner"></div> Logging In...
            </>
          ) : (
            "Login"
          )}
        </button>

        <p className="signup-text">
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
