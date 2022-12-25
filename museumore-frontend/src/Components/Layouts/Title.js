import React from 'react';
import '../../Assets/CSS/title.css'

function Title(params) {
    return(
        <div className='big-blue-title'>{params.text}</div>
    )
}

export default Title;