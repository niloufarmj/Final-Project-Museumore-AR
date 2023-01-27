import React from "react";
import "../../Assets/CSS/button.css";
function AddFileButton(params) {
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    if (params.class == "disabled")
      return;
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0] && event.target.files;
    if (!fileUploaded) {
      return;
    }
    params.stateChanger(event.target.files[0]);
    event.target.value = null;
  };
  return (
    <>
      <button className={"add-file " + params.class} onClick={handleClick}>
        {params.text}
      </button>

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
}

export default AddFileButton;
