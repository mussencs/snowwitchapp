import {React, useState, useEffect} from 'react'
import {get_location_information, get_api_data} from '../components/scripts'
import LocationTilesCollection from './LocationTilesCollection'
import SubLocationReportCard from './SubLocationReportCard';
import {apis} from '../constants';

const LocationSubLocation = ({main_location_id, sub_location_id}) => {
  
  const [snowwitch_location_data, set_snowwitch_location_data] = useState([])
  const [nws_location_hourly_data, set_nws_location_hourly_data] = useState({})
  const [nws_location_daily_data, set_nws_location_daily_data] = useState({})

  let location_info = get_location_information(main_location_id)
  let sub_locations_info = location_info.sub_locations

  useEffect(() => {
    page_load()
  }, [])

  function page_load() {
    let SNOWWITCH_LOCATION_API = apis["BASE_SNOWWITCH_API"] + "locations/" + main_location_id + "/" + sub_location_id
    get_api_data(SNOWWITCH_LOCATION_API).then(obj => set_snowwitch_location_data(obj))

    let NWS_LOCATION_API = apis["BASE_NWS_API"] + sub_locations_info[sub_location_id][1] + "," + sub_locations_info[sub_location_id][2]
    get_api_data(NWS_LOCATION_API).then(obj => nws_load(obj))

  }

  function nws_load(obj){
    get_api_data(obj["properties"]["forecast"]).then(obj => set_nws_location_daily_data(obj))
    get_api_data(obj["properties"]["forecastHourly"]).then(obj => set_nws_location_hourly_data(obj))
  }

  return (
    <div className='tile-div-col' id={sub_location_id}>
        <h1 className='section-font'>
          {sub_locations_info[sub_location_id][0]}
        </h1>
        <div className='tile-div-col'>
          <LocationTilesCollection main_location_id={main_location_id} sub_location_id={sub_location_id} snowwitch_location_data={snowwitch_location_data} nws_location_daily_data={nws_location_daily_data} nws_location_hourly_data={nws_location_hourly_data}/>
        </div>
        <div className='tile-div-col'>
          <SubLocationReportCard  main_location_id={main_location_id} sub_location_id={sub_location_id} snowwitch_location_data={snowwitch_location_data}/>
        </div>
    </div>
  )
}

export default LocationSubLocation