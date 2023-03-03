import Image from "../Layouts/Image";
import Title from "../Layouts/Title";
import "../../Assets/CSS/button.css";

import React from "react";
import Button from "../Layouts/Button";
import ReturnButton from "../Layouts/ReturnButton";

import { useTranslation } from "react-i18next";

import useScreenOrientation from "react-hook-screen-orientation";
import Landscape from "./Landscape";

function Dashboard() {
  const gallary = JSON.parse(localStorage.getItem("user"));

  const { t, i18n } = useTranslation(["dashboard"]);
  const orientation = useScreenOrientation();

  return (
    <>
      {orientation == "landscape-primary" ||
      orientation == "landscape-secondary" ? (
        <Landscape />
      ) : (
        <>
          <ReturnButton notHasReturn={true} />
          <div style={{ marginTop: "50px" }} />
          <Image
            shape="round"
            width="35%"
            height="125px"
            left="32%"
            src={gallary.image}
          />

          <div style={{ marginTop: "20px" }} />
          <Title text={gallary.name} />

          <div style={{ marginTop: "100px" }} />

          <Button text={t("add new item")} path="/additem" />
          <div style={{ marginTop: "30px" }} />
          <Button text={t("edit information")} path="/editinfo" />
          <div style={{ marginTop: "30px" }} />
          <Button text={t("library")} path="/library" />
          <div style={{ marginTop: "30px" }} />
          <Button text={t("logout")} path="/login" />
          <div style={{ marginTop: "50px" }} />
        </>
      )}
    </>
  );
}

export default Dashboard;
