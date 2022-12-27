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
import PlayAudioButton from '../Layouts/PlayAudioButton';
import VideoArea from '../Layouts/VideoArea';


function ItemInfo() {
    return(
        <>
            <ReturnButton />
            <div style={{marginTop: "30px"}} />
            <Image  width="65%" height="225px" left="16%"/>
            <div style={{marginTop: "30px"}} />
            <Title text="Title" />

            <div style={{marginTop: "70px"}} />
            <Link text="description" />
            <Text text="blah blah blah blah blah" />
            <Text text="blah blah blah blah blah" />
            <Text text="blah blah blah blah blah" />

            <div style={{marginTop: "50px"}} />

            <PlayAudioButton text="play main audio" />

            <div style={{marginTop: "50px"}} />

            <VideoArea />

            <div style={{marginTop: "70px"}} />

            <Button text="view museum info" />

            <div style={{marginTop: "50px"}} />
        </>  
    )
}

export default ItemInfo;