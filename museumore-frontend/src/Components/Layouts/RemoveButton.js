import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/CSS/button.css";

function RemoveButton(params) {
  const navigate = useNavigate();
  const stateChanger = params.stateChanger;

  const handleClick = () => {
    params.stateChanger(null);
  };

  return (
    <button className="remove-button" onClick={handleClick}>
      remove
    </button>
  );
}

export default RemoveButton;
