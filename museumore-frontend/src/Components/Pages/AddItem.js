import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import ReturnButton from "../Layouts/ReturnButton";

import React from "react";
import AddFileButton from "../Layouts/AddFileButton";
import TextArea from "../Layouts/TextArea";
import AddImageButton from "../Layouts/AddImageButton";

function AddItem() {
  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "3%" }}>
        <AddImageButton width="70%" marginLeft="15%" text="add image" />
        <div style={{ marginTop: "3%" }}></div>
        <Input text="Title" />
        <div style={{ marginTop: "3%" }}></div>
        <AddFileButton text="add main audio" />
        <div style={{ marginTop: "1%" }}></div>
        <AddFileButton text="add augmented video" />
        <div style={{ marginTop: "3%" }}></div>
        <TextArea text="Description" />
        <div style={{ marginTop: "3%" }}></div>
        <AddFileButton text="add extra audio" />
        <div style={{ marginTop: "1%" }}></div>
        <AddFileButton text="add extra augmented video" />
        <div style={{ marginTop: "5%" }}></div>
        <Button text="Done" />
        <div style={{ marginTop: "5%" }}></div>
      </div>
    </>
  );
}

export default AddItem;
