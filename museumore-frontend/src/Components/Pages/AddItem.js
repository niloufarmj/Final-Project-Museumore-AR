import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import ReturnButton from "../Layouts/ReturnButton";

import React, { useState, useEffect } from "react";
import AddFileButton from "../Layouts/AddFileButton";
import TextArea from "../Layouts/TextArea";
import AddImageButton from "../Layouts/AddImageButton";
import { useNavigate } from "react-router-dom";
import Text from "../Layouts/Text";
import Image from "../Layouts/Image";
import RemoveButton from "../Layouts/RemoveButton";

import { useTranslation } from "react-i18next";
import VideoArea from "../Layouts/VideoArea";
import CustomLoadingButton from "../Layouts/CustumLoadingButton";

function AddItem() {
  const gallary = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [image, setImage] = useState(null);
  const [shownImage, setShownImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [audio, setAudio] = useState("");
  const [augmentedVideoOrImage, setAugmentedVideoOrImage] = useState("");
  const [extraVideo, setExtraVideo] = useState(null);
  const [shownVideo, setShownVideo] = useState("");
  const [pending, setPending] = useState(false)

  const [error, setError] = useState("");

  const [margin, setMargin] = useState("100px");

  const { t, i18n } = useTranslation(["additem"]);

  const fetchItems = () => {
    fetch("http://localhost:8000/api/items/")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItem = async () => {
    if (title == "") {
      setError(t("You should fill title!"));
      // setMargin("58px");
      return;
    } else if (image == null) {
      setError(t("You should choose a target image!"));
      // setMargin("58px");
      return;
    } else {
      setPending(true)
      setError("");
      fetchItems()

      const data = new FormData();
    
      const new_image = new File([image], items.length + ".jpg");

      data.append("gallary_id", gallary.id);
      data.append("target_image", new_image);
      data.append("target_index", items.length);
      data.append("title", title);
      data.append("description", description);
      data.append("audio", audio);
      data.append("augmented_video", augmentedVideoOrImage);
      if (extraVideo != null) {
        data.append("extra_video", image);
      } else {
        data.append("extra_video", "");
      }

      fetch("http://localhost:8000/api/items/", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          compile();
        })
        .catch((err) => console.error(err));
    }
  };

  const compile = () => {
    fetch("http://localhost:8000/compile", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  const imageChange = (obj) => {
    setImage(obj);
    if (obj != null) setShownImage(URL.createObjectURL(obj));
  };

  const videoChange = (obj) => {
    setExtraVideo(obj);
    if (obj != null) setShownVideo(URL.createObjectURL(obj));
  };

  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "3%" }}>
        {image == null ? (
          <AddImageButton
            width="70%"
            marginLeft="15%"
            text={t("add target image")}
            stateChanger={imageChange}
          />
        ) : (
          <>
            <Image width="65%" left="16%" src={shownImage} />
            <RemoveButton stateChanger={imageChange} />
          </>
        )}

        <div style={{ marginTop: "3%" }}></div>

        <Input text={t("Title")} stateChanger={setTitle} />

        <div style={{ marginTop: "3%" }}></div>

        <AddFileButton text={t("add main audio")} stateChanger={setAudio} />

        <div style={{ marginTop: "1%" }}></div>

        <AddFileButton
          text={t("add augmented image or video")}
          class={"disabled"}
          stateChanger={setAugmentedVideoOrImage}
        />

        <div style={{ marginTop: "3%" }}></div>

        <TextArea text={t("Description")} stateChanger={setDescription} />

        <div style={{ marginTop: "1%" }}></div>

        {extraVideo == null ? (
          <AddFileButton
            text={t("add extra video")}
            stateChanger={videoChange}
          />
        ) : (
          <>
            <div style={{ marginTop: "3%" }}></div>
            <VideoArea width="65%" left="16%" src={shownVideo} />
            <RemoveButton stateChanger={videoChange} />
          </>
        )}

        <div style={{ marginTop: "5%" }}></div>

        {error != "" && (
          <Text marginTop={"25px"} color={"red-text"} text={error} />
        )}
        <div style={{ marginTop: "10%" }}></div>

        {!pending && <Button text={t("Done")} stateChanger={handleAddItem} />}
        {pending && <CustomLoadingButton text={true} />}

        <div style={{ marginTop: "5%" }}></div>
      </div>
    </>
  );
}

export default AddItem;
