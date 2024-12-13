import React from "react";
import "./Button.css";

const Button = ({ label, onClick, styleType = "default" }) => {
  return (
    <button className={`button ${styleType}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
