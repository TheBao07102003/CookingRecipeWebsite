import React from "react";

const MainCourse = ({ imageSrc, title }) => {
  return (
    <div
      className="card"
      style={{
        textAlign: "center",
        padding: "20px",
        border: "none", // No border
        borderRadius: "8px",
        maxWidth: "250px",
        margin: "0 auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <div
        className="image-container"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <img
          alt={title}
          src={imageSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="title"
        style={{
          marginTop: "15px",
          fontSize: "18px",
          color: "#6b4f4f",
          fontWeight: "500",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default MainCourse;
