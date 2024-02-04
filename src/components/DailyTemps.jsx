import React from 'react'
import moment from 'moment-timezone';
import Loading from './Loading'

const DailyTemps = ({main_location_id, sub_location_id, snowwitch_location_data, nws_location_hourly_data}) => {
    if (snowwitch_location_data.length == 0 || Object.keys(nws_location_hourly_data) == 0) {
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

        let time_string_1 = ""
        let time_string_2 = ""
        if (snowwitch_location_data[today_index]["date_time"].includes("T06")) {
            time_string_1 = "Daily High:"
            time_string_2 = "Nightly Low:"
        }
        else {
            time_string_2 = "Daily High:"
            time_string_1 = "Nightly Low:"
        }

        return (
            <div className='tile-div-col-center'>
                <div className='tile-font bg-red-200 tile-div-col-center'>
                    {time_string_1} {snowwitch_location_data[today_index]["temperature"]} F
                </div>
                <div className='tile-font tile-div-col-center darken-bg'>
                    Current: {nws_location_hourly_data.properties.periods[0].temperature} F
                </div>
                <div className='tile-font bg-blue-200 tile-div-col-center'>
                    {time_string_2} {snowwitch_location_data[today_index + 1]["temperature"]} F
                </div>
            </div>
            
        )    
    }
}

export default DailyTemps