import AddImageButton from "../Layouts/AddImageButton";
import Title from "../Layouts/Title";
import Input from "../Layouts/Input";
import "../../Assets/CSS/button.css";

import React, { useState } from "react";
import TextArea from "../Layouts/TextArea";
import Button from "../Layouts/Button";
import { useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next';

function AdditionalInfo() {
  const gallary = JSON.parse(localStorage.getItem("user"));

  const [image, setImage] = useState('');
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const {t, i18n} = useTranslation(['gallaryinfo']);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    
    const data = new FormData();
    data.append("name", gallary.name);
    data.append("username", gallary.username);
    data.append("email", gallary.email);
    data.append("password", gallary.password);
    data.append("image", image);
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

  return (
    <>
      <div style={{ marginTop: "50px" }} />
      <Title text={t("additional info")} />

      <div style={{ marginTop: "30px" }} />
      <AddImageButton
        shape="round"
        width="35%"
        marginLeft="32%"
        text={t("add image")}
        stateChanger={setImage}
      />

      <div style={{ marginTop: "30px" }} />
      <TextArea text={t("description")} stateChanger={setDescription} />
      <TextArea text={t("address")} stateChanger={setAddress} />
      <Input type={"number"} text={t("phone/contact")} stateChanger={setContact} />

      <div style={{ marginTop: "50px" }} />
      <Button text={t("next")} stateChanger={handleSubmit} />
      <div style={{ marginTop: "50px" }} />
    </>
  );
}

export default AdditionalInfo;
