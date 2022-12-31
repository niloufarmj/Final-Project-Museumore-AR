import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";

import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (name == "" || username == "" || email == "" || password == "") {
      alert("You should fill all fields!");
    } else {
      const item = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      await axios
        .post("/api/gallaries/", item)
        .then((response) => console.log(response.data));
    }
  };
  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "80px" }}>
        <Input text="Museum/Gallary name" stateChanger={setName} />
        <Input text="username" stateChanger={setUsername} />
        <Input text="email" stateChanger={setEmail} />
        <Input type="password" text="password" stateChanger={setPassword} />
        <div style={{ marginTop: "80px" }} />
        <Button text="signup" stateChanger={handleSubmit} />
        

        <Text marginTop={"50px"} text={"Already have an account?"} />
        <Link text="Click here to login" path="/login" />
      </div>
    </>
  );
}

export default Signup;
