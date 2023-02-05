import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import return_img from "../../Assets/Media/return.png";

import i18next from "i18next";
import lang_icon from "../../Assets/Media/lang.png";

function ReturnButton(params) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (params.redirectPath) {
      window.location.replace(params.redirectPath);
    } else if (params.path) {
      navigate(params.path);
    } else navigate(-1);
  };

  const [lang, setLang] = useState("fa_IR");

  const changeLang = () => {
    i18next.changeLanguage(lang);
    if (lang == "en_US") setLang("fa_IR");
    else setLang("en_US");
  };

  const marginLeft = params.notHasReturn == true ? "65%" : "40%";
  
  return (
    <>
      <div style={{ marginTop: "20px", display: "flex" }}>
        {!params.notHasReturn &&
          <img
            style={{ width: "13%", padding: "10px", marginLeft: "20px" }}
            src={return_img}
            onClick={handleClick}
          />
        }
        
        <button onClick={changeLang} className="lang-button" style={{marginLeft: marginLeft}}>
          <img style={{ width: "20%", marginLeft: "3px" }} src={lang_icon}></img>
          {lang}
        </button>
      </div>
    </>
  );
}

export default ReturnButton;
