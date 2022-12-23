import React from 'react';
import '../../Assets/CSS/title.css'

function ImageButton(params) {
    return(
        <>
        <div style={{display: "inline-block", alignItems: "center"}}>
            <img style={{width: "85%"}} src={ params.image } />
            <div className='title'>{ params.text }</div>
        </div>
        
        </>
        
    )
}

export default ImageButton;