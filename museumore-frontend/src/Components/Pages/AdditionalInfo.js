import Text from '../Layouts/Text';
import ReturnButton from '../Layouts/ReturnButton';
import Title from '../Layouts/Title';
import Input from '../Layouts/Input';
import '../../Assets/CSS/button.css'
import AddImageCircleButton from '../Layouts/AddImageCircleButton';

import React from 'react';
import TextArea from '../Layouts/TextArea';
import Button from '../Layouts/Button';


function AdditionalInfo() {
    return(
        <>
        <Title text="additional info" />

        <div style={{marginTop: "30px"}} />
        <AddImageCircleButton text="add image" />

        <div style={{marginTop: "30px"}} />
        <TextArea text="address" />
        <Input type={"number"} text={"phone/contact"} />

        <div style={{marginTop: "50px"}} />
        <Button text="next" />
        </>  
    )
}

export default AdditionalInfo;