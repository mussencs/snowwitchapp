import React from 'react'
import { WiDaySunny, WiDaySunnyOvercast, WiCloudy, WiRain, WiSnow } from 'react-icons/wi'
import moment from 'moment-timezone';
import Loading from './Loading'

const WeatherTile = ({snowwitch_location_data}) => {
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

        WiDaySunny, WiDaySunnyOvercast, WiCloudy, WiRain, WiSnow
        let short_forecast = snowwitch_location_data[today_index]["short_forecast"]
        let weather = [<WiDaySunny size={'6em'} color='#DC7BD0'/>, <WiDaySunnyOvercast size={'6em'} color='#DC7BD0'/>, <WiCloudy size={'6em'} color='#DC7BD0'/>, <WiRain size={'6em'} color='#DC7BD0'/>, <WiSnow size={'6em'} color='#DC7BD0'/>]

        return (
            <div className="tile-div-col-center">
                <div className="section-div-row">
                    {weather}    
                </div>
                <div className="">
                    <h2 className='tile-font'>
                        {short_forecast}
                    </h2>
                </div>
            </div>   
        )    
    }
}

export default WeatherTile