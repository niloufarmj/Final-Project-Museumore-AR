import React from "react";
import "../../Assets/CSS/input.css";

function Input(params) {
  return (
    <input type={params.type} placeholder={params.text} className="input" />
  );
}

export default Input;
