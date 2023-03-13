import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import CustomLoadingButton from "../Layouts/CustumLoadingButton";

import useScreenOrientation from "react-hook-screen-orientation";
import Landscape from "./Landscape";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [provedUsername, setProvedUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [provedPassword, setProvedPassword] = useState(false);
  const [gallaries, setGallaries] = useState([]);
  const [pending, setPending] = useState(false);

  const [error, setError] = useState("");

  const { t, i18n } = useTranslation(["login"]);
  const orientation = useScreenOrientation();

  const fetchGallaries = () => {
    fetch("http://172.20.10.10:8000/api/gallaries/")
      .then((res) => res.json())
      .then((data) => {
        setGallaries(data);
      })
      .catch((err) => {
        setError(err.message)
      }
      )
  };

  useEffect(() => {
    fetchGallaries();
  }, []);

  const handleLogin = () => {
    setPending(true);

    for (const gallary of gallaries) {
      if (username == gallary.username) {
        setProvedUsername(true);
        if (password == gallary.password) {
          setProvedPassword(true);
          localStorage.setItem("user", JSON.stringify(gallary));
          navigate("/dashboard");
          return;
        } else {
          setPending(false);
          setError(t("Password is not correct!"));

          return;
        }
      }
    }

    if (!provedUsername) {
      setPending(false);
      setError(t("There is no gallary with this username!"));
    }
  };
  return (
    <>
      {orientation == "landscape-primary" ||
      orientation == "landscape-secondary" ? (
        <Landscape />
      ) : (
        <>
          <ReturnButton path="/" />
          <div style={{ alignItems: "center", marginTop: "180px" }}>
            <Input text={t("username")} stateChanger={setUsername} />
            <Input
              type={"password"}
              text={t("password")}
              stateChanger={setPassword}
            />
            <div style={{ marginTop: "30px" }} />
            <Link text={t("forgot password?")} />

            {error != "" && (
              <Text marginTop={"25px"} color={"red-text"} text={error} />
            )}

            <div style={{ marginTop: "50px" }} />
            {!pending && (
              <Button text={t("login")} stateChanger={handleLogin} />
            )}
            {pending && <CustomLoadingButton />}
            <Text marginTop={"50px"} text={t("don't have an account?")} />
            <Link text={t("click here to signup")} path="/signup" />
          </div>
        </>
      )}
    </>
  );
}

export default Login;
