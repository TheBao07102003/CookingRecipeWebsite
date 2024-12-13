import React from "react";
import { useNavigate } from "react-router-dom"; // Thay useHistory bằng useNavigate
import "./Opening.css"; // Import CSS
import openingBg from "../../assets/images/opening-bg.png"; // Import hình nền
import logo from "../../assets/images/logo.png"; // Import logo
import Button from "../../Component/Button/Button"; // Import component Button

const Opening = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleLogin = () => {
    navigate("/Login"); // Chuyển hướng tới trang Login
  };

  const handleSignUp = () => {
    navigate("/Signup"); // Chuyển hướng tới trang Sign Up
  };

  return (
    <div className="opening-page">
      {/* Container */}
      <div className="container">
        {/* Phần bên trái */}
        <div className="left-section">
          <h1 className="welcome-text">Welcome to CookCook!</h1>
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
            <span className="cookcook-text">CookCook</span>
          </div>
          <div className="buttons">
            <Button
              label="Log In"
              style={{ width: 359, height: 44 }}
              onClick={handleLogin}
            />{" "}
            {/* Thêm onClick */}
            <Button
              label="Sign Up"
              style={{ width: 359, height: 44 }}
              onClick={handleSignUp}
            />{" "}
            {/* Thêm onClick */}
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

export default Opening;
