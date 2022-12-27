import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import UploadAudio from "../Layouts/UploadAudio";

import React, { Fragment } from "react";
import AddFileButton from "../Layouts/AddFileButton";
import TextArea from "../Layouts/TextArea";
import AddImageButton from "../Layouts/AddImageButton";

function AddItem() {
  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "40px" }}>
        <AddImageButton text="add image" width="65%" marginLeft="18%"/>
        <Input text="Title" />
        <AddFileButton text="Add Audio File" />
        <AddFileButton text="Add Augmented Video" />
        <TextArea text="Description" />
        <AddFileButton text="Add related video" />
        <div style={{ marginTop: "70px" }}></div>
        <Button text="Done" />
        <div style={{ marginTop: "30px" }}></div>
      </div>
    </>
  );
}

export default AddItem;
