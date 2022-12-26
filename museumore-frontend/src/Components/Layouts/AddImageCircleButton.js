import React from "react";
import "../../Assets/CSS/button.css";

function AddImageCircleButton(params) {
  return (
    <button className="round-button">
      <div className="dummy" />
      {params.text}
    </button>
  );
}

export default AddImageCircleButton;
