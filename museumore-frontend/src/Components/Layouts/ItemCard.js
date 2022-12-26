import React from 'react';
import '../../Assets/CSS/itemCard.css'
import Text from './Text';
import Image from './Image';

function ItemCard(params) {
    return(
        <>
         <div className='card'>
            <Image width="28%" height="90px"/>
            
            <div style={{marginLeft: "20%", marginTop: "40px"}}>
                <Text text={params.title} />
            </div>
            
         </div>
        </>
        
    )
}

export default ItemCard;