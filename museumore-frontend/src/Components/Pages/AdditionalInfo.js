import Text from '../Layouts/Text';
import ReturnButton from '../Layouts/ReturnButton';
import Title from '../Layouts/Title';
import '../../Assets/CSS/button.css'
import AddImageCircleButton from '../Layouts/AddImageCircleButton';

import React from 'react';


function AdditionalInfo() {
    return(
        <>
        
        <ReturnButton />
        <div className='center'>
            <Title text="additional info" />
            
            <div style={{width: "100%"}} />
            <div className='center'>
                <AddImageCircleButton text="add image" />
            </div>
            
        </div>
        
        </>  
    )
}

export default AdditionalInfo;