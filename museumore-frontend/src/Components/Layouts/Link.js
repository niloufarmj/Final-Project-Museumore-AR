import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/CSS/link.css";

function Link(params) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(params.path);
  }
  return (
    <p className="link" onClick={handleClick} style={{ color: params.color, marginTop: params.marginTop}}>
      {params.text}
    </p>
  );
}

export default Link;
