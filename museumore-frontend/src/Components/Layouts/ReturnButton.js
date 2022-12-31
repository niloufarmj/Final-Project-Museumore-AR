import React from "react";
import { useNavigate } from "react-router-dom";
import return_img from "../../Assets/Media/return.png";

function ReturnButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <img
      style={{ width: "10%", padding: "10px" }}
      src={return_img}
      onClick={handleClick}
    />
  );
}

export default ReturnButton;
