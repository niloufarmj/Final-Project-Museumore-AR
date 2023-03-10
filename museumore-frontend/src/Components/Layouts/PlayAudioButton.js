import React, { useState, useRef } from "react";
import "../../Assets/CSS/button.css";

import { useTranslation } from 'react-i18next';

function PlayAudioButton(params) {
  //const [buttonText, setButtonText] = useState(params.text);
  const [isPlay, setIsPlay] = useState(false);
  const myRef = useRef(new Audio(params.src));

  const {t, i18n} = useTranslation(['iteminfo']);

  const playOrstop = () => {
    if (params.src) {
      if (!isPlay) {
        myRef.current.play();
        setIsPlay(true);
      } else {
        myRef.current.pause();
        setIsPlay(false);
      }
    }
  };

  return (
    <>
      
      <button
        className="add-file"
        style={{ width: "40%", marginLeft: "30%" }}
        onClick={playOrstop}
      >
        {isPlay && t('stop playing')}
        {!isPlay && t('play main audio')}
        {"\n" + params.name}
      </button>
    </>
  );
}

export default PlayAudioButton;
