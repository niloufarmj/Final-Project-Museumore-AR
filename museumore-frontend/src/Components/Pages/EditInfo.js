import Image from '../Layouts/Image';
import Title from '../Layouts/Title';
import Input from '../Layouts/Input';
import '../../Assets/CSS/button.css'

import React from 'react';
import TextArea from '../Layouts/TextArea';
import Button from '../Layouts/Button';
import AddImageButton from '../Layouts/AddImageButton';


function EditInfo() {
    return(
        <>
            <div style={{marginTop: "50px"}} />
            <AddImageButton shape="round" width="35%" marginLeft="32%" text="add image" />

            <div style={{marginTop: "40px"}} />
            <TextArea text="address" />
            <TextArea text="description" />
            <Input text="Museum/Gallary name" />
            <Input type="number" text="phone/contact" />
            <Input type="password" text="password" />
            
            <div style={{marginTop: "70px"}} />
            <Button text="done" />

            <div style={{marginTop: "50px"}} />
        </>  
    )
}

export default EditInfo;