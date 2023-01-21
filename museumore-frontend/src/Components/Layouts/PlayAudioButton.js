import React, { useState, useRef } from "react";
import "../../Assets/CSS/button.css";

function PlayAudioButton(params) {
  const [buttonText, setButtonText] = useState(params.text);
  const [isPlay, setIsPlay] = useState(false);
  const myRef = useRef();

  const playOrstop = () => {
    if (params.src) {
      
      if (!isPlay) {
        myRef.current.play();
        setIsPlay(true);
        setButtonText("stop playing");
      } else {
        myRef.current.pause();
        setIsPlay(false);
        setButtonText(params.text);
      }
    }
  };

  return (
    <>
      <audio ref={myRef} src={params.src} />
      <button
        className="add-file"
        style={{ width: "40%", marginLeft: "30%" }}
        onClick={playOrstop}
      >
        {buttonText}
      </button>
    </>
  );
}

export default PlayAudioButton;
