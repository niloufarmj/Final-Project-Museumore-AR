import React, { useState, useEffect } from "react";
import ReturnButton from "../Layouts/ReturnButton";
import ItemCard from "../Layouts/ItemCard";

import useScreenOrientation from "react-hook-screen-orientation";
import Landscape from "./Landscape";

function Library(params) {
  const orientation = useScreenOrientation();

  const gallary = JSON.parse(localStorage.getItem("user"));

  const [allItems, setAllItems] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const arr = [];
    fetch("http://localhost:8000/api/items/")
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
          <div>
            {itemsList.map((item) => (
              <ItemCard
                image={item.target_image}
                title={item.title}
                onClick={() => {
                  localStorage.setItem("item", JSON.stringify(item));
                  window.location.replace(`http://localhost:3000/editItem`);
                }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Library;
