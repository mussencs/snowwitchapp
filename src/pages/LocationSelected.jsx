import {useState, useEffect, React} from 'react'
import LocationOptions from '../components/LocationOptions'
import LocationOverview from '../components/LocationOverview'
import AboutData from '../components/AboutData'
import AboutGrading from '../components/AboutGrading'

import {get_location_information} from '../components/scripts'
import LocationSubLocation from '../components/LocationSubLocation'

const LocationSelected = ({location_id}) => {
  

  let location_info = get_location_information(location_id)
  let sub_locations_info = location_info.sub_locations

  
  return (
    <div className='section-div-col tile-spacing-y'>
        <LocationOptions/>
        <LocationOverview location_id={location_id}/>
        {Object.keys(sub_locations_info).map((sub, index) => (       
          <LocationSubLocation key={sub} main_location_id={location_id} sub_location_id={sub}/>
        ))}
        <AboutData/>
        <AboutGrading/>
    </div>
  )
}

export default LocationSelected