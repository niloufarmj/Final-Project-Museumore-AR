import React from "react";
import "../../Assets/CSS/input.css";

function Input(params) {
  function handleChange(event) {
    params.stateChanger(event.target.value);
  }
  return (
    <input
      type={params.type}
      placeholder={params.text}
      className="input"
      onChange={handleChange}
    />
  );
}

export default Input;
