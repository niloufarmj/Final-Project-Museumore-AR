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
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleAddInfo = async () => {
    const data = {
      username: gallary.username,
      password: gallary.password,
      name: gallary.name,
      email: gallary.email,
      image: image,
      address: address,
      contact: contact,
      description: description,
      items: gallary.items,
    };

    // let item = new FormData();
    // item.append("username", gallary.username);
    // item.append("password", gallary.password);
    // item.append("name", gallary.name);
    // item.append("email", gallary.email);
    // item.append("image", image);
    // item.append("address", address);
    // item.append("contact", contact);
    // item.append("description", description);
    // item.append("items", gallary.items);

    console.log(image);
    axios
      .put(`http://localhost:8000/api/gallaries/${gallary.id}/`, data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
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
      <TextArea text="description" stateChanger={setDescription} />
      <TextArea text="address" stateChanger={setAddress} />
      <Input type={"number"} text={"phone/contact"} stateChanger={setContact} />

      <div style={{ marginTop: "50px" }} />
      <Button text="next" stateChanger={handleAddInfo} />
      <div style={{ marginTop: "50px" }} />
    </>
  );
}

export default AdditionalInfo;
