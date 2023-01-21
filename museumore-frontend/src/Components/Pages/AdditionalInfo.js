import AddImageButton from "../Layouts/AddImageButton";
import Title from "../Layouts/Title";
import Input from "../Layouts/Input";
import "../../Assets/CSS/button.css";

import React, { useState } from "react";
import TextArea from "../Layouts/TextArea";
import Button from "../Layouts/Button";
import { useNavigate } from "react-router-dom";

function AdditionalInfo() {
  const gallary = JSON.parse(localStorage.getItem("user"));

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

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
      <Button text="next" stateChanger={handleSubmit} />
      <div style={{ marginTop: "50px" }} />
    </>
  );
}

export default AdditionalInfo;
