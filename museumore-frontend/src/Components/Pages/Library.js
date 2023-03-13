import React, { useState, useEffect } from "react";
import ReturnButton from "../Layouts/ReturnButton";
import ItemCard from "../Layouts/ItemCard";

import useScreenOrientation from "react-hook-screen-orientation";
import Landscape from "./Landscape";
import Link from "../Layouts/Link";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Library(params) {
  const orientation = useScreenOrientation();

  const gallary = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [allItems, setAllItems] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  const { t, i18n } = useTranslation(["iteminfo"]);

  useEffect(() => {
    const arr = [];
    fetch("http://172.20.10.10:8000/api/items/")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        for (const item of data) {
          if (item.gallary_id == gallary.id) {
            arr.push(item);
            setItemsList(arr);
          }
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {orientation == "landscape-primary" ||
      orientation == "landscape-secondary" ? (
        <Landscape />
      ) : (
        <>
          <ReturnButton path="/dashboard" />
          {itemsList.length > 0 ? (
            <div>
              {itemsList.map((item) => (
                <ItemCard
                  image={item.target_image}
                  title={item.title}
                  onClick={() => {
                    localStorage.setItem("item", JSON.stringify(item));
                    navigate("/editItem")
                  }}
                />
              ))}
            </div>
          ) : (
            <div>
              <Link marginTop="50%" text={t("there is no item")} />
              <Link marginTop="5%" text={t("in the library right now!")} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Library;
