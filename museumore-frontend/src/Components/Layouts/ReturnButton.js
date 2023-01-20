import React from "react";
import { useNavigate } from "react-router-dom";
import return_img from "../../Assets/Media/return.png";

function ReturnButton(params) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (params.path) {
      navigate(params.path);
    } else navigate(-1);
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
