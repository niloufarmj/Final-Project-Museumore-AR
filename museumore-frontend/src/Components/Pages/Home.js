import React from "react";
import Logo from "../Layouts/Logo";
import Button from "../Layouts/Button";
import Text from "../Layouts/Text";
import Link from "../Layouts/Link";
import ImageButton from "../Layouts/ImageButton";
import about_us_img from "../../Assets/Media/about-us.png";
import how_to_img from "../../Assets/Media/how-to.png";

function Home() {
  return (
    <>
      <div style={{ alignItems: "center" }}>
        <Logo width={100} />
        <Button text={"scan"} redirectPath={"http://127.0.0.1:5500/museumore-scan-frontend/index.html"} />

        <Text marginTop={"50px"} text={"Do you own a museum / gallary?"} />
        <Link text="Click here to signup" path="/signup" />
      </div>

      <div
        style={{
          marginTop: "120px",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <ImageButton image={about_us_img} text={"About Us"} path="/aboutus" />
        <ImageButton image={how_to_img} text={"How to Use"} />
      </div>
    </>
  );
}

export default Home;
