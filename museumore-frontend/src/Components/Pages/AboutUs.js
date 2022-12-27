import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";
import Logo from "../Layouts/Logo";
import person_img from "../../Assets/Media/person.png";

import React from "react";
import PersonalCard from "../Layouts/PersonalCard";

function AboutUs() {
  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center" }}>
        <Logo width={60} />

        <Link text="Our Story" />
        <Text text="blah blah blah blah blah" />
        <Text text="blah blah blah blah blah" />
        <Text text="blah blah blah blah blah" />

        <div style={{ marginTop: "50px" }} />
        <Link text="Our Team" />
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <PersonalCard
            image={person_img}
            name={"Kimia Sedighi"}
            role={"Developer"}
          />
          <PersonalCard
            image={person_img}
            name={"Niloufar Moradi Jam"}
            role={"Developer"}
          />
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <PersonalCard
            image={person_img}
            name={"Dr. Vahidi"}
            role={"Guide Teacher"}
          />
          <PersonalCard
            image={person_img}
            name={"Dr. Alikhani"}
            role={"Guide Teacher"}
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
