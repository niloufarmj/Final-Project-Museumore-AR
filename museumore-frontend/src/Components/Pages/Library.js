import React from 'react';
import ReturnButton from '../Layouts/ReturnButton';
import ItemCard from '../Layouts/ItemCard';

function Library(params) {
    // itemsList = params.itemsList;
    var itemsList = [
        {
            "image": "", 
            "title": "title1"
        },
        {
            "image": "", 
            "title": "title2"
        },
        {
            "image": "", 
            "title": "title3"
        },
    ]
    return(
        <>
            <ReturnButton />
            <div>
                {itemsList.map((item) =>
                    <ItemCard image={item.image} title={item.title}/>
                )}
            </div>
        </>
        
    )
}

export default Library;