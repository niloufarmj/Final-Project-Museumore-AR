import Button from '../Layouts/Button';
import Input from '../Layouts/Input';
import Text from '../Layouts/Text';
import ReturnButton from '../Layouts/ReturnButton';
import Link from '../Layouts/Link';

import React from 'react';
import PasswordField from '../Layouts/PasswordField';

function Signup() {
    return(
        <>
        
        <ReturnButton />
        <div  style={{alignItems: "center", marginTop: "80px"}}>
            <Input text="Museum/Gallary name" />
            <Input text="username" />
            <Input text="email" />
            <PasswordField text="password" />
            <div style={{marginTop: "80px"}} />
            <Button text="signup" />
            <Text marginTop={"50px"} text={"Already have an account?"} />
            <Link text="click here to login" />
        </div>
        
        </>  
    )
}

export default Signup;