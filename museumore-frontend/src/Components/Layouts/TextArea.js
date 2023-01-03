import React from "react";
import "../../Assets/CSS/input.css";

function TextArea(params) {
  const handleChange = (event) => {
    params.stateChanger(event.target.value);
  };
  return (
    <textarea
      placeholder={params.text}
      className="input text-area"
      onChange={handleChange}
    />
  );
}

export default TextArea;
