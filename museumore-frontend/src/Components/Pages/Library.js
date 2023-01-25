import React, { useState, useEffect } from "react";
import ReturnButton from "../Layouts/ReturnButton";
import ItemCard from "../Layouts/ItemCard";

function Library(params) {
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
      <ReturnButton path="/dashboard" />
      <div>
        {itemsList.map((item) => (
          <ItemCard image={item.target_image} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default Library;
