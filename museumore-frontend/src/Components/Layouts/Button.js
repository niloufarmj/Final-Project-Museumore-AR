import React from 'react';
import '../../Assets/CSS/button.css'

function Button(params) {
    return(
        <button className='button'>{ params.text }</button>
    )
}

export default Button;