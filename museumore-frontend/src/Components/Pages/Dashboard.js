import Image from "../Layouts/Image";
import Title from "../Layouts/Title";
import "../../Assets/CSS/button.css";

import React from "react";
import Button from "../Layouts/Button";

function Dashboard() {
  return (
    <>
      <div style={{ marginTop: "50px" }} />
      <Image shape="round" width="35%" height="125px" left="32%" />

      <div style={{ marginTop: "20px" }} />
      <Title text="Name" />

      <div style={{ marginTop: "100px" }} />

      <Button text="add new item" path="/additem" />
      <div style={{ marginTop: "30px" }} />
      <Button text="edit information" path="/editinfo" />
      <div style={{ marginTop: "30px" }} />
      <Button text="library" path="/library" />
      <div style={{ marginTop: "30px" }} />
      <Button text="logout" path="/login" />
    </>
  );
}

export default Dashboard;
