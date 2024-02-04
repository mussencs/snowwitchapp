import React from 'react'
import { GradeTile } from './GradeTile'
import HourlyTempGraph from './HourlyTempGraph'
import ForecastSnowGraph from './ForecastSnowGraph'
import DailyTemps from './DailyTemps'
import WeatherTile from './WeatherTile'
import TotalSnowTile from './TotalSnowTile'
import Loading from './Loading'


const LocationTilesCollection = ({main_location_id, sub_location_id, snowwitch_location_data, nws_location_hourly_data, nws_location_daily_data}) => {
  return (
    <div className='section-div-grid'>
        <div className='tile-div-col-center darken-bg'>
            <GradeTile main_location_id={main_location_id} sub_location_id={sub_location_id} snowwitch_location_data={snowwitch_location_data}/>
        </div>
        <div className='tile-div-col-center darken-bg'>
            <HourlyTempGraph nws_location_hourly_data={nws_location_hourly_data}/>
        </div>
        <div className='tile-div-col-center darken-bg'>
            <ForecastSnowGraph snowwitch_location_data={snowwitch_location_data}/>
        </div>
        <div className='tile-div-col-center darken-bg'>
            <DailyTemps main_location_id={main_location_id} sub_location_id={sub_location_id} snowwitch_location_data={snowwitch_location_data} nws_location_hourly_data={nws_location_hourly_data}/>
        </div>
        <div className='tile-div-col-center darken-bg'>
            <WeatherTile main_location_id={main_location_id} sub_location_id={sub_location_id} snowwitch_location_data={snowwitch_location_data}/>
        </div>
        <div className='tile-div-col-center darken-bg'>
            <TotalSnowTile main_location_id={main_location_id} sub_location_id={sub_location_id} snowwitch_location_data={snowwitch_location_data}/>
        </div>
    </div>
  )
}

export default LocationTilesCollection