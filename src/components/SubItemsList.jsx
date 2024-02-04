import React from 'react'
import {PackingItems} from '../constants';

const SubItemsList = ({sub_list_cat_id, sub_list_cat_name}) => {
    let PackingItems_reduced = PackingItems.filter(function (PackingItem){
        return PackingItem.category == sub_list_cat_id
    })
    return (
        <div className='tile-div-col darken-bg'>
            <h1 className='section-font'>
            {sub_list_cat_name}
            </h1>
            <ul className='px-5 section-div-grid'>
                {PackingItems_reduced.map((item, index) => (
                    <li
                        key = {item}
                        className='linked-item section-div-row-start items-center'
                    >
                        <input className='check-box'
                            type="checkbox"
                            name="item"
                        />
                        <a href={item.link} className=''>
                            {item.long_name}
                        </a>
                    </li>
                ))}
            </ul>

        </div>

    )
}

export default SubItemsList