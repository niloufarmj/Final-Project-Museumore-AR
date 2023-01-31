import React from "react";
import "../../Assets/CSS/button.css";
import ReactLoading from "react-loading";
import Text from "./Text";

function CustomLoadingButton(params) {

  return (
    <>
        <button className="button">
        <ReactLoading type="bubbles" />
        </button>
        {params.text && <Text text={"this might take some time"} />}
    </>
  );
}

export default CustomLoadingButton;
