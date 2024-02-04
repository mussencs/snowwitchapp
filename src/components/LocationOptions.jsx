import { useState } from 'react'
import {Locations} from '../constants';
import {get_location_information, get_location_ids} from './scripts'
import { useNavigate } from 'react-router-dom';

const LocationOptions = () => {

    let main_locations_name_id = get_location_ids()

    let navigate = useNavigate();
    

    const handle_change = (e) => {
        let location_id = e.target.value
        navigate(`/location/${location_id}`)
        window.location.reload();
    };

    return (
        <div className='tile-div-col'>
            <div className='section-div-col'>
                <h1 className='section-font'>
                    Select a New Location
                </h1>
            </div>
            <div onChange={handle_change}>
                <select className="drop-down">
                    <optgroup label="Choose a Location">
                        <option defaultValue="Choose a Location" hidden>Choose a Location</option>
                            {main_locations_name_id.map((location_id, index) => (
                                <option value={location_id} key={location_id} className='drop-down-font'>
                                    {get_location_information(location_id).full_name}
                                </option>
                    ))}
                    </optgroup>
                </select>
            </div>
        </div>
    )
}

export default LocationOptions