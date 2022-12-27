import React from "react";
import "../../Assets/CSS/button.css";

function PlayAudioButton(params) {
  return (
    <button className="add-file" style={{ width: "40%", marginLeft: "30%" }}>
      {params.text}
    </button>
  );
}

export default PlayAudioButton;
