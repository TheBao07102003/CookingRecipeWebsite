import React, { useState } from "react";

const ChangePassword = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      alert("Mật khẩu đã được thay đổi!");
      onClose(); // Đóng modal sau khi thay đổi mật khẩu thành công
    } else {
      alert("Mật khẩu không khớp!");
    }
  };

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
      onClick={onClose} // Đóng modal khi click ra ngoài
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
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện click ra ngoài khi click vào modal
      >
        <h3>Change Password</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                marginBottom: "10px",
                boxSizing: "border-box", // Đảm bảo padding không gây lệch
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                boxSizing: "border-box", // Đảm bảo padding không gây lệch
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#d87d4a",
              border: "none",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
