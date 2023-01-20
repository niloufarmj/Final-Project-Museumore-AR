import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [provedUsername, setProvedUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [provedPassword, setProvedPassword] = useState(false);
  const [gallaries, setGallaries] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/gallaries/")
      .then((res) => res.json())
      .then((data) => {
        setGallaries(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleLogin = () => {
    for (const gallary of gallaries) {
      if (username == gallary.username) {
        setProvedUsername(true);
        if (password == gallary.password) {
          setProvedPassword(true);
          localStorage.setItem("user", JSON.stringify(gallary));
          navigate("/dashboard");
          return;
        } else {
          setError("Password is not correct!");
          return;
        }
      }
    }

    if (!provedUsername) {
      setError("There is no gallary with this username!");
    }
  };
  return (
    <>
      <ReturnButton path="/"/>
      <div style={{ alignItems: "center", marginTop: "180px" }}>
        <Input text="username" stateChanger={setUsername} />
        <Input type={"password"} text="password" stateChanger={setPassword} />
        <div style={{ marginTop: "30px" }} />
        <Link text="forgot password?" />

        {error != "" && (
          <Text marginTop={"25px"} color={"red-text"} text={error} />
        )}

        <div style={{ marginTop: "50px" }} />
        <Button text="login" stateChanger={handleLogin} />
        <Text marginTop={"50px"} text={"don't have an account?"} />
        <Link text="click here to signup" path="/signup" />
      </div>
    </>
  );
}

export default Login;
