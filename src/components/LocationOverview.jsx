import React from 'react'
import {get_location_information} from './scripts'

const LocationOverview = ({location_id}) => {
    let location_info = get_location_information(location_id)
    let sub_locations_info = location_info.sub_locations
    let links = Object.keys(sub_locations_info)
    let sub_link = "#" + "base"
    for (let i = 0; i < links.length; i++) {
        links[i] = "/snowwitchapp/#/location/" + location_info.id + "#" + links[i]
    }
    return (
        <div className='tile-div-col'>
            <h1 className='section-font'>
                {location_info.full_name} Dashboard
            </h1>
            <h1 className='tile-font'>
                {location_info.full_name} contains the following sub locations
            </h1>
            <ul className='px-5 list-disc'>
                {Object.keys(sub_locations_info).map((sub, index) => (
                    
                    <li key={sub} className='linked-item'>
                        <a href={links[index]}>{sub_locations_info[sub][0]}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LocationOverview