import React from "react";

function TopRecipeCard({ imageSrc, recipeName }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          padding: "15px",
          width: "300px",
        }}
      >
        <img
          alt={recipeName}
          src={imageSrc}
          style={{
            width: "100%",
            height: "300px", // Cố định chiều cao của hình ảnh
            objectFit: "cover", // Đảm bảo hình ảnh phủ đầy không bị biến dạng
            borderRadius: "50%", // Giữ hình ảnh tròn nếu cần
          }}
        />
        <h2 style={{ color: "#4a2c2a", fontSize: "24px", margin: "20px 0" }}>
          {recipeName}
        </h2>
        <button
          style={{
            backgroundColor: "#fbbd08",
            border: "none",
            borderRadius: "20px",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Cook Now
        </button>
      </div>
    </div>
  );
}

export default TopRecipeCard;
