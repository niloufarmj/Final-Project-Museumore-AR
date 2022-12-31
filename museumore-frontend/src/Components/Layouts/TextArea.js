import React from "react";
import "../../Assets/CSS/input.css";

function TextArea(params) {
  return <textarea placeholder={params.text} className="input text-area" />
}

export default TextArea;
