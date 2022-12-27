import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/CSS/title.css";

function ImageButton(params) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(params.path);
  };
  return (
    <>
      <div style={{ display: "inline-block", alignItems: "center" }}>
        <img
          style={{ width: "85%" }}
          src={params.image}
          onClick={handleClick}
        />
        <div className="title">{params.text}</div>
      </div>
    </>
  );
}

export default ImageButton;
