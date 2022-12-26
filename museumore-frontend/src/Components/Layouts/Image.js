import React from "react";
import img from "../../Assets/Media/sample-image.png";
import "../../Assets/CSS/image.css"

function Image(params) {
  return (
    <div>
      {params.shape == "round" ? (
        <img src={img} className="round" />
      ) : (
        <img src={img} className="rectangle" />
      )}
    </div>
  );
}

export default Image;
