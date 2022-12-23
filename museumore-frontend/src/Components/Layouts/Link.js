import React from 'react';
import '../../Assets/CSS/link.css'

function Link(params) {
    return(
        <p className='link'>{params.text}</p>
    )
}

export default Link;