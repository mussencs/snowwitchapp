import { useState, useEffect }  from 'react'
import moment from 'moment-timezone';
import Loading from './Loading'

const SubLocationReportCard = ({main_location_id, sub_location_id, snowwitch_location_data}) => {
    
    function find_today_index(){
        let today_mst = toTimeZone('America/Denver') + "T06:00:00"
        let today_index = 0


        for (let i = 0; i < snowwitch_location_data.length; i++) {
            if (snowwitch_location_data[i]["date_time"].includes(today_mst)) {
                today_index = i
                break
            }
        }
        
        return today_index
    }

    function toTimeZone(zone) {
        let format = 'YYYY-MM-DD';
        return moment().tz(zone).format(format);
    }
    
    let today_index = find_today_index()
    const [day_index, set_day_index] = useState(find_today_index())
    let days_index = [today_index, today_index - 2, today_index - 4, today_index - 6, today_index - 8, today_index - 10]



    const handle_change = (e) => {
        today_index = set_day_index(e.target.value)
    };



    if (snowwitch_location_data.length == 0) {

        
        return (
            <div><Loading/></div>
        )
    }
    else {  
        if (day_index == 0) {
            set_day_index(today_index)
        }
        return (
            <div className='tile-div-col-center darken-bg'>
                <div onChange={handle_change}>
                    <select className="drop-down">
                        <optgroup label="Choose a time">
                            <option defaultValue="Choose a time" hidden>Choose a Time</option>
                                {days_index.map((i) => (
                                    <option value={i} key={i} className=''>
                                        {snowwitch_location_data[i]["date_time"]}
                                    </option>
                                ))}
                        </optgroup>
                    </select>
                </div>
                <h2>
                    Report Card for {snowwitch_location_data[day_index]["sub_location_id"]}
                </h2>
                <p>
                    Predict a {snowwitch_location_data[day_index]["raw_grade"]} on {snowwitch_location_data[day_index]["date_time"]}
                </p>
                <table className="border-separate border-spacing-2 border border-slate-400"> 
                    <tbody className="">
                        <tr>
                            <th>
                                Category
                            </th>
                            <th>
                                Value
                            </th>
                            <th>
                                Score
                            </th>
                            <th>
                                Weight
                            </th>
                        </tr>
                        <tr className="">
                            <td>Past 1 Day Snow Fall</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_1"][0]}" to {snowwitch_location_data[day_index]["snow_accumulation_1"][2]}"</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_1_score"]}</td>
                            <td>10%</td>
                        </tr>
                        <tr className="">
                            <td>Past 3 Day Snow Fall</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_3"][0]}" to {snowwitch_location_data[day_index]["snow_accumulation_3"][2]}"</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_3_score"]}</td>
                            <td>5%</td>
                        </tr>
                        <tr className="">
                            <td>Past 7 Day Snow Fall</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_7"][0]}" to {snowwitch_location_data[day_index]["snow_accumulation_7"][2]}"</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_7_score"]}</td>
                            <td>10%</td>
                        </tr>
                        <tr className="">
                            <td>Past 30 Day Snow Fall</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_30"][0]}" to {snowwitch_location_data[day_index]["snow_accumulation_30"][2]}"</td>
                            <td>{snowwitch_location_data[day_index]["snow_accumulation_30_score"]}</td>
                            <td>45%</td>
                        </tr>
                        <tr className="">
                            <td>Short Forecast</td>
                            <td>{snowwitch_location_data[day_index]["short_forecast"]}</td>
                            <td>{snowwitch_location_data[day_index]["short_forecast_score"]}</td>
                            <td>10%</td>
                        </tr>
                        <tr className="">
                            <td>High Temperature</td>
                            <td>{snowwitch_location_data[day_index]["temperature"]}</td>
                            <td>{snowwitch_location_data[day_index]["temperature_score"]}</td>
                            <td>10%</td>
                        </tr>
                        <tr className="">
                            <td>Wind Speed</td>
                            <td>{snowwitch_location_data[day_index]["wind_speed"]}</td>
                            <td>{snowwitch_location_data[day_index]["wind_speed_score"]}</td>
                            <td>10%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          )
    }
  

}

export default SubLocationReportCard