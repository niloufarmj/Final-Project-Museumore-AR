import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";
import Logo from "../Layouts/Logo";
import person_img from "../../Assets/Media/person.png";

import React from "react";
import PersonalCard from "../Layouts/PersonalCard";

import { useTranslation } from 'react-i18next';

function AboutUs() {

  const {t, i18n} = useTranslation(['aboutus']);

  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center" }}>
        <Logo width={60} />

        <Link text={t("Our Story")} />
        <Text text="blah blah blah blah blah" />
        <Text text="blah blah blah blah blah" />
        <Text text="blah blah blah blah blah" />

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
  );
}

export default AboutUs;
