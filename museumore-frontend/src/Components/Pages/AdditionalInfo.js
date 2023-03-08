import AddImageButton from "../Layouts/AddImageButton";
import Title from "../Layouts/Title";
import Input from "../Layouts/Input";
import "../../Assets/CSS/button.css";

import React, { useState } from "react";
import TextArea from "../Layouts/TextArea";
import Button from "../Layouts/Button";
import { useNavigate } from "react-router-dom";
import Image from "../Layouts/Image";
import RemoveButton from "../Layouts/RemoveButton";

import { useTranslation } from "react-i18next";

import useScreenOrientation from "react-hook-screen-orientation";
import Landscape from "./Landscape";

function AdditionalInfo() {
  const gallary = JSON.parse(localStorage.getItem("user"));

  const [image, setImage] = useState(null);
  const [shownImage, setShownImage] = useState(null);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const { t, i18n } = useTranslation(["gallaryinfo"]);
  const orientation = useScreenOrientation();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("name", gallary.name);
    data.append("username", gallary.username);
    data.append("email", gallary.email);
    data.append("password", gallary.password);
    if (image != null) {
      data.append("image", image);
    } else {
      data.append("image", "");
    }
    data.append("address", address);
    data.append("contact", contact);
    data.append("description", description);

    fetch(`http://192.168.43.107:8000/api/gallaries/${gallary.id}/`, {
      method: "PUT",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  const imageChange = (obj) => {
    setImage(obj);
    if (obj != null) setShownImage(URL.createObjectURL(obj));
  };

  return (
    <>
      {orientation == "landscape-primary" ||
      orientation == "landscape-secondary" ? (
        <Landscape />
      ) : (
        <>
          <div style={{ marginTop: "50px" }} />
          <Title text={t("additional info")} />

          <div style={{ marginTop: "30px" }} />

          {image == null ? (
            <AddImageButton
              shape="round"
              width="35%"
              marginLeft="32%"
              text={t("add image")}
              stateChanger={imageChange}
            />
          ) : (
            <>
              <Image
                shape="round"
                width="35%"
                height="125px"
                left="32%"
                src={shownImage}
              />
              <RemoveButton stateChanger={imageChange} />
            </>
          )}

          <div style={{ marginTop: "30px" }} />
          <TextArea text={t("description")} stateChanger={setDescription} />
          <TextArea text={t("address")} stateChanger={setAddress} />
          <Input
            type={"number"}
            text={t("phone/contact")}
            stateChanger={setContact}
          />

          <div style={{ marginTop: "50px" }} />
          <Button text={t("next")} stateChanger={handleSubmit} />
          <div style={{ marginTop: "50px" }} />
        </>
      )}
    </>
  );
}

export default AdditionalInfo;
