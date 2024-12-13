import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Signup.css"; // Import CSS
import openingBg from "../../assets/images/opening-bg.png"; // Import hình nền
import logo from "../../assets/images/logo.png"; // Import logo
import Button from "../../Component/Button/Button"; // Import component Button

const SignUp = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleLogin = () => {
    navigate("/Login"); // Chuyển hướng tới trang Login
  };

  return (
    <div className="signup-page">
      {/* Container */}
      <div className="container">
        {/* Phần bên trái */}
        <div className="left-section">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
            <span className="signup-text">Sign Up</span>
          </div>

          {/* Email Field */}
          <div className="input-container">
            <label className="input-label">Username</label>
            <input
              type="email"
              placeholder="Enter username"
              className="input-field"
            />
          </div>

          {/* Password Field */}
          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
            {/* Icon show/hide password */}
          </div>

          {/* Confirm Password Field */}
          <div className="input-container">
            <label className="input-label">Confirm your password</label>
            <input
              type="password"
              placeholder="Enter your password again"
              className="input-field"
            />
            {/* Icon show/hide password */}
          </div>

          {/* Sign Up Button */}
          <div className="buttons">
            <Button label="Sign Up" style={{ width: 359, height: 44 }} />
          </div>

          {/* Log In Prompt */}
          <div className="login-prompt" style={{ margin: "10px 0 0 10px" }}>
            <span>Already have an account? </span>
            <span
              className="login-link"
              onClick={handleLogin} // Thêm onClick để chuyển hướng
              style={{ color: "#FFC86E", cursor: "pointer" }}
            >
              Log In
            </span>
          </div>
        </div>

        {/* Phần bên phải */}
        <div className="right-section">
          <img src={openingBg} alt="Background" className="opening-bg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
