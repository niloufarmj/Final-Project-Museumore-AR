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

function ItemInfo() {
  const { index } = useParams();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/items/")
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
    return <div>Loading...</div>;
  }
  return (
    <>
      <ReturnButton redirectPath={"http://127.0.0.1:5500/scan/index.html"} />
      <div style={{ marginTop: "30px" }} />
      <Image width="65%" height="225px" left="16%" src={item.target_image} />
      <div style={{ marginTop: "30px" }} />
      <Title text={item.title} />

      <div style={{ marginTop: "70px" }} />
      <Link text="description" />
      <Text text={item.description} />

      <div style={{ marginTop: "50px" }} />

      <PlayAudioButton text="play main audio" src={item.audio} />

      <div style={{ marginTop: "50px" }} />

      <VideoArea />

      <div style={{ marginTop: "70px" }} />

      <Button text="view museum info" path="/museuminfo" />

      <div style={{ marginTop: "50px" }} />
    </>
  );
}

export default ItemInfo;
