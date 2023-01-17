import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [margin, setMargin] = useState("40px");

  const [errorName, setErrorName] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleSubmit = async () => {
    if (name == "" || username == "" || email == "" || password == "") {
      setError("You should fill all fields!");
      setMargin("58px");
      return;
    } else {
      const item = {
        name: name,
        username: username,
        email: email,
        password: password
        // items: []
      };
      axios
        .post("http://localhost:8000/api/gallaries/", item)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/additionalinfo");
          setError("");
          setErrorName("");
          setErrorUserName("");
          setErrorPassword("");
          setErrorEmail("");
        })
        .catch((error) => {
          if (error.response.data.name) {
            setError(error.response.data.name);
            setErrorName("red");
            setErrorUserName("");
            setErrorPassword("");
            setErrorEmail("");
          } else if (error.response.data.username) {
            setError(error.response.data.username);
            setErrorUserName("red");
            setErrorName("");
            setErrorPassword("");
            setErrorEmail("");
          } else if (error.response.data.password) {
            setError(error.response.data.password);
            setErrorPassword("red");
            setErrorName("");
            setErrorUserName("");
            setErrorEmail("");
          } else if (error.response.data.email) {
            setError(error.response.data.email);
            setErrorEmail("red");
            setErrorName("");
            setErrorUserName("");
            setErrorPassword("");
          } else console.log(error);
        });
    }
  };

  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "60px" }}>
        <Input
          text="Museum/Gallary name"
          stateChanger={setName}
          border={errorName}
        />
        <Input
          text="username"
          stateChanger={setUsername}
          border={errorUserName}
        />
        <Input text="email" stateChanger={setEmail} border={errorEmail} />
        <Input
          type="password"
          text="password"
          stateChanger={setPassword}
          border={errorPassword}
        />

        {error != "" && (
          <Text marginTop={"25px"} color={"red-text"} text={error} />
        )}

        <div style={{ marginTop: margin }} />
        <Button text="signup" stateChanger={handleSubmit} />

        <Text marginTop={"40px"} text={"Already have an account?"} />
        <Link text="Click here to login" path="/login" />

        <div style={{ marginTop: "60px" }} />
      </div>
    </>
  );
}

export default Signup;
