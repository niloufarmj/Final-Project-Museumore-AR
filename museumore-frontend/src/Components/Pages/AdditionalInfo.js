import AddImageButton from '../Layouts/AddImageButton';
import Title from '../Layouts/Title';
import Input from '../Layouts/Input';
import '../../Assets/CSS/button.css'

import React from 'react';
import TextArea from '../Layouts/TextArea';
import Button from '../Layouts/Button';


function AdditionalInfo() {
    return(
        <>
        <div style={{marginTop: "50px"}} />
        <Title text="additional info" />

        <div style={{marginTop: "30px"}} />
        <AddImageButton shape="round" width="35%" marginLeft="32%" text="add image" />

        <div style={{marginTop: "30px"}} />
        <TextArea text="address" />
        <Input type={"number"} text={"phone/contact"} />

        <div style={{marginTop: "50px"}} />
        <Button text="next" />
        </>  
    )
}

export default AdditionalInfo;