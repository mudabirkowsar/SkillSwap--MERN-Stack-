import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { registerUser } from "../../api/authApis";

const SignupPage = ({ onSignup }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      return alert("⚠ Please fill in all fields!");
    }

    if (formData.password !== formData.confirmPassword) {
      return alert("❌ Password and Confirm Password do not match!");
    }

    try {
      const data = await registerUser(formData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      // Show Toast Notification 🎉
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      onSignup();
      setTimeout(() => navigate("/find-skills"), 1200);
      console.log("Signup successful");
    } catch (error) {
      console.log("Error while signup ")
    }
  };

  return (
    <div className="signup-wrapper">

      {/* ✅ Toast Notification */}
      {showToast && (
        <div className="toast-success">
          <i className="fas fa-check-circle"></i> Account Created Successfully!
        </div>
      )}

      <form className="signup-box" onSubmit={handleSignup}>
        <h2 className="signup-title">Create Account ✨</h2>
        <p className="signup-subtitle">Join SkillSwap and grow together!</p>

        <div className="input-group">
          <i className="fas fa-user input-icon"></i>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-envelope input-icon"></i>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-lock input-icon"></i>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInput}
            required
          />
          <i
            className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"} password-toggle`}
            onClick={() => setShowPass(!showPass)}
          ></i>
        </div>

        <div className="input-group">
          <i className="fas fa-lock input-icon"></i>
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInput}
            required
          />
          <i
            className={`fas ${showConfirmPass ? "fa-eye-slash" : "fa-eye"} password-toggle`}
            onClick={() => setShowConfirmPass(!showConfirmPass)}
          ></i>
        </div>

        <button className="signup-btn" type="submit">Sign Up</button>

        <p className="login-text">
          Already have an account?
          <span onClick={() => navigate("/login")}> Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
