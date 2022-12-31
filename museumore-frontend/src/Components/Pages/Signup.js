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
  const [error, setError] = useState("");
  const [margin, setMargin] = useState("100px");

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
        password: password,
      };
      await axios
        .post("/api/gallaries/", item)
        .then((response) => {
          console.log(response.data);
          setError("");
        })
        .catch((error) => {
          if (error.response.data.name)
            setError(error.response.data.name)
          else if (error.response.data.username)
            setError(error.response.data.username)
          else if (error.response.data.password)
            setError(error.response.data.password)
          else if (error.response.data.email)
            setError(error.response.data.email)
          else 
            console.log(error)

        }
        );
    }
  };

  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "60px" }}>
        <Input text="Museum/Gallary name" stateChanger={setName} />
        <Input text="username" stateChanger={setUsername} />
        <Input text="email" stateChanger={setEmail} />
        <Input type="password" text="password" stateChanger={setPassword} />
        
        {
          error !="" &&
          <Text marginTop={"25px"} color={"blue"} text={error} />
        }
          
        <div style={{ marginTop: margin }} />
        <Button text="signup" stateChanger={handleSubmit} />

        <Text marginTop={"40px"} text={"Already have an account?"} />
        <Link text="Click here to login" path="/login" />

        <div style={{marginTop: "60px"}} />
      </div>
    </>
  );
}

export default Signup;
