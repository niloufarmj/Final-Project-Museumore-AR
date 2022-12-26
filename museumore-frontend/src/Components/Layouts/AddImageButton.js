import React from 'react';
import '../../Assets/CSS/button.css'

function AddImageButton(params) {

    let style = {
        width: params.width,
        marginLeft: params.marginLeft
    }
    
    return(
        <button className={'add-image-button ' + params.shape} style={style}>
            <div className='dummy' />
            {params.text}
        </button>
    )
}

export default AddImageButton;
