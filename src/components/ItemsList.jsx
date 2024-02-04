import React from 'react'
import SubItemsList from './SubItemsList'
import {PackingCategories} from '../constants';

const ItemsList = () => {

    return (
    <div className='tile-div-col' id="something">
        <h1 className='section-font'>
            The List
        </h1>
        {PackingCategories.map((cat, index) => (      
            <div className='tile-div-col' id={cat.id}>
                <SubItemsList sub_list_cat_id={cat.id} sub_list_cat_name={cat.name}/>
            </div>
        ))}
    </div>
    )
}

export default ItemsList