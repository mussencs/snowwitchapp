import React from 'react'
import Gallery from './Gallery'
import {get_location_information, get_location_ids} from './scripts'

const Welcome = () => {

  let main_locations_name_id = get_location_ids()
  let main_locations_full_name = []
  for (let i = 0; i < main_locations_name_id.length; i++) {
    main_locations_full_name.push(get_location_information(main_locations_name_id[i]).full_name)
  }

  return (
    <div className='tile-div-row'>
      <div className='section-div-col-start'>
        <h1 className='section-font'>
              SnowWitch
        </h1>
        <p>
          View and compare weather reports about popular ski locations in Colorado! 
        </p>
        <br/>
        <p>
          I frequently snowboard at Colorado's numerous ski locations and wanted to display information and locations I care about. Since ski locations are often very large I do not believe a single measurement of recent snowfall is super helpful when deciding which location to visit. SnowWitch considers multiple weather conditions at various sub-locations using a standard rubric. This allows an unbiased and direct comparison of popular ski locations
        </p>
        <br/>
        <h2 className='tile-font'>
              SnowWitch's supported locations
        </h2>
        <br/>
        <ul className='section-div-grid'>
          {main_locations_name_id.map((location_id, index) => (
              <li
                  key = {location_id}
                  className='tile-div-col-center darken-bg'
              >
                  <a href={`#/location/${location_id}`} className='tile-font linked-item'>
                    {main_locations_full_name[index]}
                  </a>
              </li>
          ))}                                            
        </ul>
      </div>
      <div className='hidden p-5 sm:section-div-col'>
        <Gallery/>
      </div>
    </div>
  )
}

export default Welcome