import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import ReturnButton from "../Layouts/ReturnButton";

import React, { useState, useEffect } from "react";
import AddFileButton from "../Layouts/AddFileButton";
import TextArea from "../Layouts/TextArea";
import Text from "../Layouts/Text";
import Image from "../Layouts/Image";
import RemoveButton from "../Layouts/RemoveButton";

import { useTranslation } from "react-i18next";
import VideoArea from "../Layouts/VideoArea";
import { useNavigate } from "react-router-dom";
import PlayAudioButton from "../Layouts/PlayAudioButton";

function EditItem() {
  const item = JSON.parse(localStorage.getItem("item"));
  const { t, i18n } = useTranslation(["additem"]);

  const navigate = useNavigate();

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const [audio, setAudio] = useState(item.audio);
  const [playableAudio, setPlayableAudio] = useState(item.audio);
  const [augmentedVideoOrImage, setAugmentedVideoOrImage] = useState("");
  const [extraVideo, setExtraVideo] = useState(item.extra_video);
  const [shownVideo, setShownVideo] = useState(item.extra_video);
  const [audioName, setAudioName] = useState(item.audio_name);
  const [audioChanged, setAudioChanged] = useState(false);
  const [videoChanged, setVideoChanged] = useState(false);

  const [error, setError] = useState("");

  const handleEditItem = async () => {
    if (title == "") {
      setError(t("You should fill title!"));
      return;
    } else {
      setError("");

      const data = new FormData();

      let blob = await fetch(item.target_image).then((r) => r.blob());
      let new_image = new File(
        [blob],
        item.target_image.substring(item.target_image.lastIndexOf("/") + 1)
      );

      let new_audio = audio;
      if (!audioChanged && audio != null) {
        blob = await fetch(audio).then((r) =>
          r.blob({
            type: "audio/mpeg",
          })
        );
        new_audio = new File(
          [blob],
          audioName
        );
      }

      let new_video = extraVideo;
      if (!videoChanged && extraVideo != null) {
        blob = await fetch(extraVideo).then((r) =>
          r.blob({
            type: "video/mp4",
          })
        );
        new_video = new File(
          [blob],
          extraVideo.substring(extraVideo.lastIndexOf("/") + 1)
        );
      }

      data.append("id", item.id);
      data.append("gallary_id", item.gallary_id);
      data.append("target_image", new_image);
      data.append("target_index", item.target_index);
      data.append("title", title);
      data.append("description", description);
      if (audio != null) {
        data.append("audio", new_audio);
      } else {
        data.append("audio", "");
      }
      data.append("augmented_video", augmentedVideoOrImage);
      if (extraVideo != null) {
        data.append("extra_video", new_video);
      } else {
        data.append("extra_video", "");
      }

      fetch(`http://192.168.1.104:8000/api/items/${item.id}/`, {
        method: "PUT",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("done");
          navigate("/library");
        })
        .catch((err) => console.error(err));
    }
  };

  const handleDeleteItem = async () => {};

  const videoChange = (obj) => {
    setExtraVideo(obj);
    if (obj != null) setShownVideo(URL.createObjectURL(obj));
    setVideoChanged(true);
  };

  const audioChange = (obj) => {
    setAudio(obj);
    setAudioName("");
    if (obj != null) {
      setAudioName(obj.name);
      setPlayableAudio(URL.createObjectURL(obj))
    }
    setAudioChanged(true);
  };

  return (
    <>
      <ReturnButton redirectPath={"/library"} />
      <div style={{ alignItems: "center", marginTop: "3%" }}>
        <Image width="65%" left="16%" src={item.target_image} />

        <div style={{ marginTop: "3%" }}></div>

        <Input text={t("Title")} stateChanger={setTitle} initText={title} />

        <div style={{ marginTop: "3%" }}></div>

        {audio == null ? (
          <AddFileButton
            text={t("add main audio")}
            stateChanger={audioChange}
          />
        ) : (
          <>
            <div style={{ marginTop: "3%" }}></div>
            <PlayAudioButton
              src={playableAudio}
              name={audioName}
            />
            <RemoveButton stateChanger={audioChange} />
          </>
        )}

        
        <div style={{ marginTop: "1%" }}></div>

        <AddFileButton
          text={t("add augmented image or video")}
          class={"disabled"}
          stateChanger={setAugmentedVideoOrImage}
        />

        <div style={{ marginTop: "3%" }}></div>

        <TextArea
          text={t("Description")}
          stateChanger={setDescription}
          initText={description}
        />

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

        <Button text={t("Done")} stateChanger={handleEditItem} />

        {/* TODO : DELETE ITEM / NEXT VERSION */}
        {/* <Button text={t("Delete Item")} stateChanger={handleDeleteItem} /> */}

        <div style={{ marginTop: "5%" }}></div>
      </div>
    </>
  );
}

export default EditItem;
