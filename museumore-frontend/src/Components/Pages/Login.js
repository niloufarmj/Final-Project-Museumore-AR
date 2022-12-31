import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Text from "../Layouts/Text";
import ReturnButton from "../Layouts/ReturnButton";
import Link from "../Layouts/Link";

import React from "react";

function Login() {
  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "180px" }}>
        <Input text="username" />
        <Input type={"password"} text="password" />
        <div style={{ marginTop: "30px" }} />
        <Link text="forgot password?" />
        <div style={{ marginTop: "80px" }} />
        <Button text="login" />
        <Text marginTop={"50px"} text={"don't have an account?"} />
        <Link text="click here to signup" path="/signup" />
      </div>
    </>
  );
}

export default Login;
