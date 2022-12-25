import React from 'react';
import '../../Assets/CSS/button.css'

function AddImageCircleButton(params) {
    return(
        <button className='round-button'>{params.text}</button>
    )
}

export default AddImageCircleButton;