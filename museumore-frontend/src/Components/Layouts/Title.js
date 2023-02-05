import React from "react";
import "../../Assets/CSS/title.css";

function Title(params) {
  return <p className="big-blue-title" style={{width: params.width}}>{params.text}</p>;
}

export default Title;
