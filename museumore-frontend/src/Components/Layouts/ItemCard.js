import React, { useEffect, useState } from "react";
import "../../Assets/CSS/itemCard.css";
import Text from "./Text";
import Image from "./Image";

function ItemCard(params) {
  const [title, setTitle] = useState(params.title);

  useEffect(() => {
    if (title.length > 13)
      setTitle("..." + title.substr(0, 13))
  }, []);
  return (
    <>
      <div className="card" onClick={params.onClick}>
        <Image width="37%" height="90px" left="2%" src={params.image} />

        <div style={{ marginLeft: "40%", marginTop: "-75px" }}>
          <Text text={title} />
        </div>
      </div>
    </>
  );
}

export default ItemCard;
