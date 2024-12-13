import React from "react";
import "../../assets/images/opening-bg.png";
import Button from "../../Component/Button/Button";

const Logout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(23, 26, 31, 0.12)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 688,
          height: 373,
          background: "#593329",
          borderRadius: "30px",
          position: "relative",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#F9B17A", fontSize: 40, fontWeight: 700 }}>
          Log out
        </h1>
        <p style={{ color: "white", fontSize: 20, marginTop: "20px" }}>
          Are you sure you want to log out?
        </p>
        <div style={{ marginTop: "40px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button label="OK" styleType="confirm" />
          <Button label="Cancel" styleType="cancel" />
        </div>
      </div>
    </div>
  );
};

export default Logout;
