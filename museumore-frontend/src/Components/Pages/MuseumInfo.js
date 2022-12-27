import Image from '../Layouts/Image';
import Link from '../Layouts/Link';
import Text from '../Layouts/Text';
import '../../Assets/CSS/button.css'
import Title from '../Layouts/Title';

import React from 'react';
import TextArea from '../Layouts/TextArea';
import Button from '../Layouts/Button';
import AddImageButton from '../Layouts/AddImageButton';
import ReturnButton from '../Layouts/ReturnButton';


function MuseumInfo() {
    return(
        <>
            <ReturnButton />
            <div style={{marginTop: "30px"}} />
            <Image shape="round"  width="35%" height="125px" left="32%"/>
            <div style={{marginTop: "20px"}} />
            <Title text="Name" />

            <div style={{marginTop: "70px"}} />
            <Link text="description" />
            <Text text="blah blah blah blah blah" />
            <Text text="blah blah blah blah blah" />
            <Text text="blah blah blah blah blah" />

            <div style={{marginTop: "50px"}} />
            <Link text="address" />
            <Text text="blah blah blah blah blah" />
            <Text text="blah blah blah blah blah" />

            <div style={{marginTop: "50px"}} />
            <Link text="phone" />
            <Text text="123456789" />
            
            <div style={{marginTop: "50px"}} />
            <Link text="email" />
            <Text text="blah@blah.blah" />

            <div style={{marginTop: "50px"}} />
        </>  
    )
}

export default MuseumInfo;