import Input from "../Layouts/Input";
import "../../Assets/CSS/button.css";

import React, { useState, useEffect } from "react";
import TextArea from "../Layouts/TextArea";
import Button from "../Layouts/Button";
import AddImageButton from "../Layouts/AddImageButton";
import { useNavigate } from "react-router-dom";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Image from "../Layouts/Image";

import { useTranslation } from "react-i18next";
import RemoveButton from "../Layouts/RemoveButton";

function EditInfo() {
  const gallary = JSON.parse(localStorage.getItem("user"));

  const { t, i18n } = useTranslation(["gallaryinfo"]);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  useEffect(() => {
    if (gallary.image != null) {
      toDataURL(gallary.image).then((dataUrl) => {
        setImage(dataURLtoFile(dataUrl, "imageName.jpg"));
      });
    }
  }, []);

  const [image, setImage] = useState(gallary.image);
  const [shownImage, setShownImage] = useState(gallary.image);
  const [name, setName] = useState(gallary.name);
  const [description, setDescription] = useState(gallary.description);
  const [contact, setContact] = useState(gallary.contact);
  const [address, setAddress] = useState(gallary.address);
  const [password, setPassword] = useState(gallary.password);

  const handleEdit = async () => {
    const data = new FormData();
    data.append("name", name);
    data.append("username", gallary.username);
    data.append("email", gallary.email);
    data.append("password", password);

    if (image != null) {
      data.append("image", image);
    } else {
      data.append("image", "");
    }
    data.append("address", address);
    data.append("contact", contact);
    data.append("description", description);

    fetch(`http://localhost:8000/api/gallaries/${gallary.id}/`, {
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
      <ReturnButton path={"/dashboard"} />
      <div style={{ marginTop: "30px" }} />
      {image == null ? (
        <AddImageButton
          shape="round"
          width="35%"
          marginLeft="32%"
          text={t("change or set profile image")}
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

      <div style={{ marginTop: "40px" }} />
      <Input
        text={t("Museum / Gallary name")}
        stateChanger={setName}
        initText={name}
      />
      <TextArea
        text={t("description")}
        stateChanger={setDescription}
        initText={description}
      />
      <Input
        type="number"
        text={t("phone/contact")}
        stateChanger={setContact}
        initText={contact}
      />
      <TextArea
        text={t("address")}
        stateChanger={setAddress}
        initText={address}
      />
      <Input
        text={t("password")}
        stateChanger={setPassword}
        initText={password}
      />
      {error != "" && (
        <Text marginTop={"25px"} color={"red-text"} text={error} />
      )}
      <div style={{ marginTop: "40px" }} />
      <Button text={t("done")} stateChanger={handleEdit} />

      <div style={{ marginTop: "50px" }} />
    </>
  );
}

export default EditInfo;
