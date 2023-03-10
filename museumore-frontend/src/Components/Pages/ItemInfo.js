import Image from "../Layouts/Image";
import Link from "../Layouts/Link";
import Text from "../Layouts/Text";
import "../../Assets/CSS/button.css";
import Title from "../Layouts/Title";

import React, { useEffect, useState } from "react";
import Button from "../Layouts/Button";
import ReturnButton from "../Layouts/ReturnButton";
import PlayAudioButton from "../Layouts/PlayAudioButton";
import VideoArea from "../Layouts/VideoArea";
import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import useScreenOrientation from "react-hook-screen-orientation";
import Landscape from "./Landscape";

function ItemInfo() {
  const { index } = useParams();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();

  const { t, i18n } = useTranslation(["iteminfo"]);
  const orientation = useScreenOrientation();

  useEffect(() => {
    fetch("http://192.168.1.104:8000/api/items/")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        for (const i of data) {
          if (i.target_index == index) {
            setItem(i);
            localStorage.setItem("item_index", index);
            localStorage.setItem("gallary_id", i.gallary_id);
          }
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!item) {
    return <div>{t("Loading...")}</div>;
  }
  return (
    <>
      {orientation == "landscape-primary" ||
      orientation == "landscape-secondary" ? (
        <Landscape />
      ) : (
        <>
          <ReturnButton redirectPath={"/"} />
          <div style={{ marginTop: "30px" }} />
          <Image width="65%" left="16%" src={item.target_image} />
          <div style={{ marginTop: "30px" }} />
          <Title text={item.title} width="70%" />

          <div style={{ marginTop: "70px" }} />
          <Link text={t("description")} />
          <Text text={item.description} width="80%" />

          <div style={{ marginTop: "50px" }} />
          {item.audio && <PlayAudioButton src={item.audio} name={item.audio_name}/>}

          <div style={{ marginTop: "50px" }} />

          {item.extra_video && <VideoArea src={item.extra_video} />}

          <div style={{ marginTop: "70px" }} />

          <Button text={t("view museum / gallary info")} path="/museuminfo" />

          <div style={{ marginTop: "50px" }} />
        </>
      )}
    </>
  );
}

export default ItemInfo;
