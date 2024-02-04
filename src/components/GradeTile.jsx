import React from 'react'
import {snake, apple, cat, cauldron, demon, foul} from '../assets/images';
import moment from 'moment-timezone';
import Loading from './Loading'

export const GradeTile = ({main_location_id, sub_location_id, snowwitch_location_data}) => {
  
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

        let today_mst = toTimeZone('America/Denver') + "T06:00:00"
        let today_index = 0

        for (let i = 0; i < snowwitch_location_data.length; i++) {
            if (snowwitch_location_data[i]["date_time"].includes(today_mst)) {
                today_index = i
                break
            }
        }

        let grade = snowwitch_location_data[today_index]["raw_grade"]
        let letterGrade = "F"
        if (grade < 60) {
            letterGrade = "F"
        }
        else if (grade < 70) {
            letterGrade = "D"
        }
        else if (grade < 80) {
            letterGrade = "C"
        }
        else if (grade < 90) {
            letterGrade = "B"
        }
        else {
            letterGrade = "A"
        }

        let gradeUrl = {
            A: apple,
            B: cat,
            C: cauldron,
            D: demon,
            F: foul
        }
        

        let date_time_str = snowwitch_location_data[today_index]["date_time"].substring(0,10)
        return (
            <div className='tile-div-row-center'>
                <div className='section-div-col'>
                    <img src={gradeUrl[letterGrade]} className='w-1/2'/>
                </div>
                <div className='section-div-col'>
                    <div className='tile-font'>
                        {grade}%
                    </div>
                    <div className='base-font'>
                        {date_time_str}
                    </div>
                </div>
                
            </div>
        )    
    }

    


}
