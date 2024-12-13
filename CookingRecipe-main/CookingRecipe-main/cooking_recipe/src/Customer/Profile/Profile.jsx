import React, { useEffect, useState } from "react";
import { FaUser, FaIdBadge, FaLock, FaChevronRight } from "react-icons/fa";

const Profile = ({ onClose, onChangePasswordClick }) => {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get user data from localStorage
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");

    if (userId && username) {
      setUserId(userId);
      setUsername(username);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        className="profile-card"
        style={{
          backgroundColor: "#fff4e6",
          borderRadius: "15px",
          padding: "20px",
          width: "300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ fontWeight: "700", color: "#333", marginBottom: "20px" }}>
          USER PROFILE
        </h3>
        <div
          className="info-item"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <FaUser style={{ marginRight: "8px" }} /> Username
          </span>
          <span style={{ fontWeight: "500", color: "#333" }}>{username}</span>
        </div>
        <div
          className="info-item"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <FaIdBadge style={{ marginRight: "8px" }} /> ID
          </span>
          <span style={{ fontWeight: "500", color: "#333" }}>{userId}</span>
        </div>
        <h4
          style={{
            fontWeight: "700",
            color: "#333",
            textAlign: "left",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        >
          PRIVACY
        </h4>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#d87d4a",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px 0",
            marginBottom: "10px",
          }}
          onClick={onChangePasswordClick}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaLock style={{ marginRight: "8px" }} /> Change Password
          </span>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Profile;
