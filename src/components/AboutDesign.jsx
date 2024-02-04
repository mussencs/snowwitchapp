import React from 'react'
import {backend} from '../assets/images';

const AboutDesign = () => {
  return (
    <div className='tile-div-col'>
        <h1 className='section-font'>
            About Design
        </h1>
        <p>
          This site is a React app that gets data from the <a href="https://www.weather.gov/documentation/services-web-api" className='link-looks'> National Weather Service API.</a> as well as a second API to access a DynamoDB Table. This database is updated hourly by an EventBridge Schedule and Lambda function that saves information from the National Weather Service. 
        </p>
        <div className='section-div-col'>
            <img src={backend} alt="backend" className='w-1/3 '/>
        </div>
    </div>
  )
}

export default AboutDesign