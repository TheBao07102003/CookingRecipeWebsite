import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ onProfileClick }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogout = () => {
    // Clear the login status from localStorage
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const handleLoginOrLogout = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate("/Login");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#5C3A2E",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      {/* Logo Section */}
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
      >
        <div>
          <img src="/images/logo.png" alt="logo" style={{ height: "50px" }} />
        </div>
      </div>
      <div
        style={{
          color: "#FFC86E",
          fontSize: 18,
          fontFamily: "Poppins, sans-serif",
          fontWeight: "800",
          wordWrap: "break-word",
        }}
      >
        CookCook
      </div>
      {/* Navigation Links */}
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "300px" }}
      >
        <NavLink to="/News" style={{ marginRight: "10px" }}>
          <img src="/images/NewsIcon.png" alt="NewsIcon" />
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFC86E" : "#F4A950",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: isActive ? "bold" : "normal",
            fontFamily: "Poppins, sans-serif",
          })}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/OurStory"
          style={({ isActive }) => ({
            color: isActive ? "#FFC86E" : "#F4A950",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: isActive ? "bold" : "normal",
            fontFamily: "Poppins, sans-serif",
          })}
        >
          Our Story
        </NavLink>
        <NavLink
          to="/Recipes"
          style={({ isActive }) => ({
            color: isActive ? "#FFC86E" : "#F4A950",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: isActive ? "bold" : "normal",
            fontFamily: "Poppins, sans-serif",
          })}
        >
          Recipes
        </NavLink>
        <NavLink to={"/Wishlist"} style={{ marginLeft: "4px" }}>
          <img src="/images/WishlistIcon.png" alt="WishlistIcon" />
        </NavLink>
      </div>
      <NavLink
        to={isLoggedIn ? "/" : "/Login"}
        style={{
          margin: "auto",
          color: "#593329",
          border: "1px solid #FFC86E",
          backgroundColor: "#FFC86E",
          borderRadius: "35px",
          padding: "10px 25px 10px 25px",
          fontSize: "16",
          fontWeight: "500",
          cursor: "pointer",
          textDecoration: "none",
        }}
        onClick={handleLoginOrLogout}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </NavLink>

      {isLoggedIn && (
        <div
          onClick={onProfileClick}
          style={{ cursor: "pointer", marginLeft: "auto" }}
        >
          <img
            src="/images/user2.png"
            alt="Profile"
            style={{ height: "30px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
