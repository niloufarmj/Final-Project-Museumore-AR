import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import ReturnButton from "../Layouts/ReturnButton";

import React, { useState } from "react";
import AddFileButton from "../Layouts/AddFileButton";
import TextArea from "../Layouts/TextArea";
import AddImageButton from "../Layouts/AddImageButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Text
 from "../Layouts/Text";
function AddItem() {
  const gallary = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [audio, setAudio] = useState(null);
  const [augmentedVideoOrImage, setAugmentedVideoOrImage] = useState(null);
  const [extraVideo, setExtraVideo] = useState(null);

  const [error, setError] = useState("");

  const [margin, setMargin] = useState("100px");

  const handleAddItem = async () => {
    if (title == "") {
      setError("You should fill title!");
      // setMargin("58px");
      return;
    }
    // else if (image == null) {
    //   setError("You should choose a target image!");
    //   // setMargin("58px");
    //   return;
    // }
    else {
      const item = {
        gallary: gallary.id,
        target_image: image,
        title: title,
        description: description,
        audio: audio,
        augmented_video: augmentedVideoOrImage,
        extra_video: extraVideo,
      };
      axios
        .post("http://localhost:8000/api/items/", item)
        .then((response) => {
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "3%" }}>
        <AddImageButton
          width="70%"
          marginLeft="15%"
          text="add target image"
          stateChanger={setImage}
        />
        <div style={{ marginTop: "3%" }}></div>
        <Input text="Title" stateChanger={setTitle} />
        <div style={{ marginTop: "3%" }}></div>
        <AddFileButton text="add main audio" stateChanger={setAudio} />
        <div style={{ marginTop: "1%" }}></div>
        <AddFileButton
          text="add augmented image or video"
          stateChanger={setAugmentedVideoOrImage}
        />
        <div style={{ marginTop: "3%" }}></div>
        <TextArea text="Description" stateChanger={setDescription} />
        <div style={{ marginTop: "1%" }}></div>
        <AddFileButton text="add extra video" stateChanger={setExtraVideo} />
        <div style={{ marginTop: "5%" }}></div>
        {error != "" && (
          <Text marginTop={"25px"} color={"red-text"} text={error} />
        )}
        <Button text="Done" stateChanger={handleAddItem} />
        <div style={{ marginTop: "5%" }}></div>
      </div>
    </>
  );
}

export default AddItem;
