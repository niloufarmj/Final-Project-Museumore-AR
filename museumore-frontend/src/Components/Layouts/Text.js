import React from "react";
import "../../Assets/CSS/text.css";

function Text(params) {
  return (
    <p
      className={"text " + params.color}
      style={{
        marginTop: params.marginTop,
        width: params.width,
      }}
    >
      {params.text}
    </p>
  );
}

export default Text;
