import React from 'react';
import Logo from "../Layouts/Logo";
import Button from "../Layouts/Button";
import Text from "../Layouts/Text";
import Link from "../Layouts/Link";

function Home() {
  return (
    <>
    <Logo marginLeft={"-35px"} width={"120%"}/>
    <Button text={"scan"} />
    <div style={{alignItems: "center"}}>
        <Text marginTop={"40px"} text={"do you own a museum / gallaty?"} />
        <Link text="click here to signup" />
    </div>
    
    </>
  );
}

export default Home;