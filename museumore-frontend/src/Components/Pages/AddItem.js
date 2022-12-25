import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import UploadAudio from "../Layouts/UploadAudio";

import React from "react";

function AddItem() {
  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "180px" }}>
        <Input text="Title" />
        <div style={{ marginTop: "30px" }} />
        <UploadAudio />
        <Button text="Done" />
      </div>
    </>
  );
}

export default AddItem;
