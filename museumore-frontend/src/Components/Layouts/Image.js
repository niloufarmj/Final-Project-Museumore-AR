import React from "react";
import img from "../../Assets/Media/sample-image.png";
import "../../Assets/CSS/image.css"

function Image(params) {
  let style = {
    width: params.width,
    height: params.height,
    left: params.left
  }
  return (
    <img src={img} className={"image " + params.shape} style={style}/>
  );
}

export default Image;
