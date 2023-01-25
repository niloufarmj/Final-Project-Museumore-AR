import Input from "../Layouts/Input";
import "../../Assets/CSS/button.css";

import React, { useState } from "react";
import TextArea from "../Layouts/TextArea";
import Button from "../Layouts/Button";
import AddImageButton from "../Layouts/AddImageButton";
import { useNavigate } from "react-router-dom";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";

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
      const data = new FormData();
      data.append("username", gallary.username);
      data.append("password", password);
      data.append("name", name);
      data.append("email", gallary.email);
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
    }
  };

  return (
    <>
      <ReturnButton path={"/dashboard"} />
      <div style={{ marginTop: "30px" }} />
      <AddImageButton
        shape="round"
        width="35%"
        marginLeft="32%"
        text="change or set profile image"
        stateChanger={setImage}
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
