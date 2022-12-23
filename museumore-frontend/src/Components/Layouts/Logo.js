import mmr_logo from "../../Assets/Media/mmR.jpg";
import React from 'react';

function Logo(params) {

    const mystyle = {
        width: params.width
      };

    return (
        <>
        <img style={mystyle} src={mmr_logo} className="logo"/>
        </>
    )
}

export default Logo;