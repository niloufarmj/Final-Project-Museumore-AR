import Input from "../Layouts/Input";
import "../../Assets/CSS/button.css";

import React, { useState } from "react";
import TextArea from "../Layouts/TextArea";
import Button from "../Layouts/Button";
import AddImageButton from "../Layouts/AddImageButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Text from "../Layouts/Text";

function EditInfo() {
  const gallary = JSON.parse(localStorage.getItem("user"));

  const [image, setImage] = useState(gallary.image);
  const [name, setName] = useState(gallary.name);
  const [description, setDescription] = useState(gallary.description);
  const [contact, setContact] = useState(gallary.contact);
  const [address, setAddress] = useState(gallary.address);
  const [password, setPassword] = useState(gallary.password);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleEdit = async () => {
    if (name == "") {
      setError("You should fill name!");
      return;
    } else if (password == "") {
      setError("You should fill password!");
      return;
    } else {
      
      const item = {
        username: gallary.username,
        password: password,
        name: name,
        email: gallary.email,
        image: null,
        address: address,
        contact: contact,
        description: description,
        items: gallary.items,
      };
      
      axios
        .put(`http://localhost:8000/api/gallaries/${gallary.id}/`, item)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div style={{ marginTop: "50px" }} />
      <AddImageButton
        shape="round"
        width="35%"
        marginLeft="32%"
        text="add image"
      />

      <div style={{ marginTop: "40px" }} />
      <Input
        text="Museum/Gallary name"
        stateChanger={setName}
        initText={name}
      />
      <TextArea
        text="description"
        stateChanger={setDescription}
        initText={description}
      />
      <Input
        type="number"
        text="phone/contact"
        stateChanger={setContact}
        initText={contact}
      />
      <TextArea text="address" stateChanger={setAddress} initText={address} />
      <Input text="password" stateChanger={setPassword} initText={password} />
      {error != "" && (
        <Text marginTop={"25px"} color={"red-text"} text={error} />
      )}
      <div style={{ marginTop: "40px" }} />
      <Button text="done" stateChanger={handleEdit} />

      <div style={{ marginTop: "50px" }} />
    </>
  );
}

export default EditInfo;
