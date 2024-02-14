import {React, useEffect, useState} from 'react'
import {apis} from '../constants';
import {get_api_data, get_location_information} from '../components/scripts'
import {snake, apple, cat, cauldron, demon, foul} from '../assets/images';
import moment from 'moment-timezone';
import Loading from './Loading'

const TierListTable = () => {

    const[dates, set_dates] = useState([])
    const[daily_tier_list, set_daily_tier_list] = useState([])
    const [day_index, set_day_index] = useState(0)
    const combined_date_grade_num = ['combined_date_grade_0', 'combined_date_grade_1', 'combined_date_grade_2', 'combined_date_grade_3', 'combined_date_grade_4', 'combined_date_grade_5', 'combined_date_grade_6']

    let image_reference = {
        S: snake,
        A: apple,
        B: cat,
        C: cauldron,
        D: demon,
        F: foul
    }
    let tier_list = ["S", "A", "B", "C", "D", "F"]
        
    let days_index = [0, 1, 2, 3, 4, 5, 6]

    const handle_change = (e) => {
        set_day_index(e.target.value)
    };

      
    function page_load() {
        let SNOWWITCH_LOCATION_API = apis["BASE_SNOWWITCH_API"] + "grades"
        get_api_data(SNOWWITCH_LOCATION_API).then(obj => update_data(obj))
    }

    function update_data(obj) {
        let temp_dates = []
        let temp_daily_tier_list = [{
            "S": [],
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "F": [],
        }, {
            "S": [],
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "F": [],
        }, {
            "S": [],
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "F": [],
        }, {
            "S": [],
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "F": [],
        }, {
            "S": [],
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "F": [],
        }, {
            "S": [],
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "F": [],
        }, {
            "S": [],
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "F": [],
        }]
        for (let i = 0; i < obj.length; i++) {
            temp_dates = []
            for (let j = 0; j < combined_date_grade_num.length; j++) {
                temp_dates.push(obj[i][combined_date_grade_num[j]]["date_time"])
                let entry = obj[i][combined_date_grade_num[j]]
                if (entry.letter_grade == "S") {
                    temp_daily_tier_list[j]["S"].push([obj[i]["main_location_id"], get_location_information(obj[i]["main_location_id"])["full_name"]])      
                }
                if (entry.letter_grade == "A") {
                    temp_daily_tier_list[j]["A"].push([obj[i]["main_location_id"], get_location_information(obj[i]["main_location_id"])["full_name"]])    
                }
                if (entry.letter_grade == "B") {
                    temp_daily_tier_list[j]["B"].push([obj[i]["main_location_id"], get_location_information(obj[i]["main_location_id"])["full_name"]])        
                }
                if (entry.letter_grade == "C") {
                    temp_daily_tier_list[j]["C"].push([obj[i]["main_location_id"], get_location_information(obj[i]["main_location_id"])["full_name"]])  
                }
                if (entry.letter_grade == "D") {
                    temp_daily_tier_list[j]["D"].push([obj[i]["main_location_id"], get_location_information(obj[i]["main_location_id"])["full_name"]])  
                }
                if (entry.letter_grade == "F") {
                    temp_daily_tier_list[j]["F"].push([obj[i]["main_location_id"], get_location_information(obj[i]["main_location_id"])["full_name"]])  
                }
            }
            console.log(temp_dates)
        }
        set_dates(temp_dates)
        set_daily_tier_list(temp_daily_tier_list)
        
    }


    useEffect(() => {
        page_load()
    }, [])

    console.log(daily_tier_list)
    if (daily_tier_list.length == 0) {
        
        return (
            <div><Loading/></div>
        )
    }
    else {
        return (
            <div className='tile-div-col'>
                <div onChange={handle_change}>
                    <select className="drop-down">
                        <optgroup label="Choose a time">
                            <option defaultValue="Choose a time" hidden>Choose a Time</option>
                                {days_index.map((i) => (
                                    <option value={i} key={i} className=''>
                                        {dates[i]}
                                    </option>
                                ))}
                        </optgroup>
                    </select>
                </div>
                <h2 className='section-font'>
                    Location Base Tier List
                </h2>
                <table className=""> 
                    <tbody className="bg-gray-800">
                        <tr>
                            <th className="w-1/4 tile-font">
                                Tier
                            </th>
                            <th className="w-3/4 tile-font">
                                Location
                            </th>
                        </tr>
                        {tier_list.map((key) => (
                            <tr className="table-alt-colors">
                                <td className="table-td">
                                    <img src={image_reference[key]} id="grade" className='w-1/2'/>
                                </td>
                                <td>
                                    <ul className='section-div-grid'>
                                        {(daily_tier_list[day_index][key]).map((location, index) => (
                                            <li
                                                key = {location[0]}
                                                className='tile-div-col-center darken-bg'
                                            >
                                                <a href={`#/location/${location[0]}#base`} className='tile-font linked-item'>
                                                    {location[1]}
                                                </a>
                                            </li>
                                        ))}                                            
                                    </ul>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TierListTable