import React from 'react';
import '../../Assets/CSS/text.css'

function Text(params) {
    return(
        
        <p className='text' style={{marginTop: params.marginTop}}>{params.text}</p>
        
    )
}

export default Text;