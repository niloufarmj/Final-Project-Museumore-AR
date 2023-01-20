import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/CSS/button.css";

function Button(params) {
  const navigate = useNavigate();
  const stateChanger = params.stateChanger;

  const handleClick = () => {
    if (params.redirectPath) {
      window.location.replace(params.redirectPath);
    } else {
      navigate(params.path);
      // if this button is login or signup it hanldles navigating by itself and its params doesn't have path and it has statechanger
      if (stateChanger) {
        stateChanger();
      }
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {params.text}
    </button>
  );
}

export default Button;
