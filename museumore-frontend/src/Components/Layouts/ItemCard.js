import React from 'react';
import '../../Assets/CSS/itemCard.css'
import Text from './Text';

function ItemCard(params) {
    return(
        <>
         <div className='card'>
            {/* {image} */}
            <div style={{backgroundColor: "blue", width: "40%"}}>
                Image todo from kimia
            </div>
            <div style={{marginLeft: "20%", marginTop: "-10px"}}>
                <Text text={params.title} />
            </div>
            
         </div>
        </>
        
    )
}

export default ItemCard;