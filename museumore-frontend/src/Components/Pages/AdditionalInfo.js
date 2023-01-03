import AddImageButton from "../Layouts/AddImageButton";
import Title from "../Layouts/Title";
import Input from "../Layouts/Input";
import "../../Assets/CSS/button.css";

import React, { useState } from "react";
import TextArea from "../Layouts/TextArea";
import Button from "../Layouts/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdditionalInfo() {
  const gallary = JSON.parse(localStorage.getItem("user"));
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const handleAddInfo = async () => {
    const item = {
      name: gallary.name,
      username: gallary.username,
      email: gallary.email,
      password: gallary.password,
      image: null,
      address: address,
      contact: contact,
    };

    axios
      .put(`http://localhost:8000/api/gallaries/${gallary.id}/`, item)
      .then((response) => {
        localStorage.setItem("user", response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div style={{ marginTop: "50px" }} />
      <Title text="additional info" />

      <div style={{ marginTop: "30px" }} />
      <AddImageButton
        shape="round"
        width="35%"
        marginLeft="32%"
        text="add image"
        stateChanger={setImage}
      />

      <div style={{ marginTop: "30px" }} />
      <TextArea text="address" stateChanger={setAddress} />
      <Input type={"number"} text={"phone/contact"} stateChanger={setContact} />

      <div style={{ marginTop: "50px" }} />
      <Button text="next" stateChanger={handleAddInfo} />
    </>
  );
}

export default AdditionalInfo;
