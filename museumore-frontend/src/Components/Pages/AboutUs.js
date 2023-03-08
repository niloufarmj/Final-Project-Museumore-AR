import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";
import Logo from "../Layouts/Logo";
import person_img from "../../Assets/Media/person.png";

import React, { useState } from "react";
import PersonalCard from "../Layouts/PersonalCard";

import { useTranslation } from "react-i18next";

import useScreenOrientation from "react-hook-screen-orientation";
import Landscape from "./Landscape";

function AboutUs() {
  const { t, i18n } = useTranslation(["aboutus"]);
  const {story , setStory} = useState("Today, every field has been directly or indirectly affected by technology and it has improved the efficiency and accuracy of that work. One of these technologies is augmented reality, and this project is an attempt to use this technology in order to improve the method of informing people in the fields of artistic and historical works in places such as museums, galleries, etc. Although these days, similar programs have been used in great museums of the world, such as the Louvre Museum, it can almost be said that there is no similar program in Iran. Also, there is no published program that is not specific to a specific place and any person can enter the system dynamically and not only use the augmented reality features of the program, but also be the administrator of this system and add or delete information from it. For this reason, this project has been developed with the aim of creating a dynamic system for places such as museums, galleries and any other archives, which is a web application. This program includes special panels for the visitor and the administrator, each of them has its own features and facilities and has been developed for a specific purpose.");
  const orientation = useScreenOrientation();

  return (
    <>
      {orientation == "landscape-primary" ||
      orientation == "landscape-secondary" ? (
        <Landscape />
      ) : (
        <>
          <ReturnButton />
          <div style={{ alignItems: "center" }}>
            <Logo width={60} />

            <Link text={t("Our Story")} />
            <Text text={story} />

            <div style={{ marginTop: "50px" }} />
            <Link text={t("Our Team")} />
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <PersonalCard
                image={person_img}
                name={t("Kimia Sedighi")}
                role={t("Developer")}
              />
              <PersonalCard
                image={person_img}
                name={t("Niloufar Moradi Jam")}
                role={t("Developer")}
              />
            </div>
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <PersonalCard
                image={person_img}
                name={t("Dr. Vahidi")}
                role={t("Guide Teacher")}
              />
              <PersonalCard
                image={person_img}
                name={t("Dr. Alikhani")}
                role={t("Guide Teacher")}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutUs;
