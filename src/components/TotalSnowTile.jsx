import React from 'react'
import moment from 'moment-timezone';
import Loading from './Loading'
import { TfiRuler } from 'react-icons/tfi'

const TotalSnowTile = ({snowwitch_location_data}) => {
    if (snowwitch_location_data.length == 0) {
        return (
            <div><Loading/></div>
        )
    }
    else {

        function toTimeZone(zone) {
            let format = 'YYYY-MM-DD';
            return moment().tz(zone).format(format);
        }

        let today_mst = toTimeZone('America/Denver') + "T06:00:00-06:00"
        let today_index = 0

        for (let i = 0; i < snowwitch_location_data.length; i++) {
            if (snowwitch_location_data[i]["date_time"] == today_mst) {
                today_index = i
                break
            }
        }

        let snow_accumulation_7_low = snowwitch_location_data[today_index]["snow_accumulation_7"][0]
        let snow_accumulation_7_high = snowwitch_location_data[today_index]["snow_accumulation_7"][2]


        return (
            <div className="tile-div-row-center">
                <div className='section-div-col w-1/5'>
                    <TfiRuler size={'6em'} color='#DC7BD0'/>
                </div>
                <div className="section-div-col w-4/5 tile-font">
                    {snow_accumulation_7_low}" to {snow_accumulation_7_high}" in the last 7 days    
                </div>
            </div>   
        )    
    }
}

export default TotalSnowTile