import Image from "../Layouts/Image";
import Link from "../Layouts/Link";
import Text from "../Layouts/Text";
import "../../Assets/CSS/button.css";
import Title from "../Layouts/Title";

import React, { useState, useEffect } from "react";
import ReturnButton from "../Layouts/ReturnButton";

import { useTranslation } from 'react-i18next';

function MuseumInfo() {
  const index = localStorage.getItem("item_index");
  const [gallary, setGallary] = useState();
  const gallary_id = localStorage.getItem("gallary_id");

  const {t, i18n} = useTranslation(['gallaryinfo']);

  useEffect(() => {
    fetch(`http://localhost:8000/api/gallaries/${gallary_id}/`)
      .then((res) => res.json())
      .then((data) => {
        setGallary(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!gallary) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ReturnButton path={`/iteminfo/${index}`} />
      <div style={{ marginTop: "30px" }} />
      <Image
        shape="round"
        width="35%"
        height="125px"
        left="32%"
        src={gallary.image}
      />
      <div style={{ marginTop: "20px" }} />
      <Title text={gallary.name} />

      <div style={{ marginTop: "70px" }} />
      <Link text={t("description")} />
      <Text text={gallary.description} />

      <div style={{ marginTop: "50px" }} />
      <Link text={t("address")} />
      <Text text={gallary.address} />

      <div style={{ marginTop: "50px" }} />
      <Link text={t("phone")} />
      <Text text={gallary.contact} />

      <div style={{ marginTop: "50px" }} />
      <Link text={t("email")} />
      <Text text={gallary.email} />

      <div style={{ marginTop: "50px" }} />
    </>
  );
}

export default MuseumInfo;
