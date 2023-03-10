import React, { useState } from "react";
import Logo from "../Layouts/Logo";
import Button from "../Layouts/Button";
import Text from "../Layouts/Text";
import Link from "../Layouts/Link";
import ImageButton from "../Layouts/ImageButton";
import about_us_img from "../../Assets/Media/about-us.png";
import how_to_img from "../../Assets/Media/how-to.png";

import { useTranslation } from "react-i18next";
import useScreenOrientation from "react-hook-screen-orientation";

import ReturnButton from "../Layouts/ReturnButton";
import Landscape from "./Landscape";

function Home() {
  const { t, i18n } = useTranslation(["home"]);
  const orientation = useScreenOrientation();

  return (
    <>
      {orientation == "landscape-primary" ||
      orientation == "landscape-secondary" ? (
        <Landscape />
      ) : (
        <>
          <ReturnButton notHasReturn={true} />
          <div style={{ alignItems: "center" }}>
            <Logo width={100} />
            {/* <Button text={t("scan")} redirectPath={"http://127.0.0.1:8080"} /> */}
            {/* <Button text={t("scan")} redirectPath={"http://192.168.1.104:5502/scan-compile/scan/index.html"} /> */}
            <Button text={t("scan")} redirectPath={"http://192.168.1.104:5502/scan-compile/scan/index.html"} />
            <Text
              marginTop={"50px"}
              text={t("Do you own a museum / gallary?")}
            />
            <Link text={t("Click here to signup")} path="/signup" />
          </div>

          <div
            style={{
              marginTop: "120px",
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            <ImageButton
              image={about_us_img}
              text={t("About Us")}
              path="/aboutus"
            />
            <ImageButton image={how_to_img} text={t("How to Use")} />
          </div>
          <div style={{ marginTop: "50px" }}></div>
        </>
      )}
    </>
  );
}

export default Home;
