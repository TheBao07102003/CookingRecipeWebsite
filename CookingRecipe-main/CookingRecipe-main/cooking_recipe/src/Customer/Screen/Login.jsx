import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import openingBg from "../../assets/images/opening-bg.png";
import logo from "../../assets/images/logo.png";
import Button from "../../Component/Button/Button";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    navigate("/Signup");
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (error) setError("");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (error) setError("");
  };

  const handleLogin = async () => {
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    if (username.length < 3 || password.length < 6) {
      setError(
        "Username must be at least 3 characters and password must be at least 6 characters long"
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setError(responseData.error || "Login failed");
        return;
      }

      // Save user information to localStorage
      localStorage.setItem("userId", responseData.userId);
      localStorage.setItem("username", responseData.username);
      localStorage.setItem("isLoggedIn", "true");

      console.log("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="left-section">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
            <span className="login-text">Log In</span>
          </div>
          <div className="input-container">
            <label className="input-label">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="input-field"
              value={username}
              onChange={handleUsernameChange}
              autoComplete="off"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="off"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="forgot-password">
            <span>Forgot password?</span>
          </div>
          <div className="buttons">
            <Button
              label={isLoading ? "Logging in..." : "Log In"}
              onClick={handleLogin}
              disabled={isLoading}
              style={{ width: 359, height: 44 }}
            />
          </div>
          <div className="sign-up-prompt">
            <span>Don't have an account? </span>
            <span className="sign-up-link" onClick={handleSignUp}>
              Sign Up
            </span>
          </div>
        </div>
        <div className="right-section">
          <img src={openingBg} alt="Background" className="opening-bg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
