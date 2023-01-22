import React from "react";
import "../../Assets/CSS/itemCard.css";
import Text from "./Text";
import Image from "./Image";

function ItemCard(params) {
  return (
    <>
      <div className="card">
        <Image width="37%" height="90px" left="2%" src={params.image} />

        <div style={{ marginLeft: "20%", marginTop: "-75px" }}>
          <Text text={params.title}  />
        </div>
      </div>
    </>
  );
}

export default ItemCard;
