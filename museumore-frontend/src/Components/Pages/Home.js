import React from 'react';
import Logo from "../Layouts/Logo";
import Button from "../Layouts/Button";
import Text from "../Layouts/Text";
import Link from "../Layouts/Link";
import ImageButton from '../Layouts/ImageButton';
import about_us_img from "../../Assets/Media/about-us.png"
import how_to_img from "../../Assets/Media/how-to.png"

function Home() {
  return (
    <>
    <div style={{alignItems: "center"}}>
      <Logo width={100}/>
      <Button text={"scan"} />
    
      <Text marginTop={"50px"} text={"do you own a museum / gallaty?"} />
      <Link text="click here to signup" />
    </div>

    <div style={{marginTop: "120px", justifyContent: "space-around", display: "flex"}}>
      <ImageButton image={about_us_img} text={"about us"}/>
      <ImageButton image={how_to_img} text={"how to use"}/>
    </div>
    
    </>
  );
}

export default Home;