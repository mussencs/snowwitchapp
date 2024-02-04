import React from 'react'
import {location_screenshot, tierlist_screenshot, rubric_screenshot, packing_screenshot} from '../assets/images';

const Hero = () => {
  return (
    <div className='tile-div-col'>
        <h2 className='section-font'>
            Features
        </h2>
        <div className='section-div-grid'>
          <div className='tile-div-col-center darken-bg'>
            <a href="/snowwitchapp/#/location">
              <h3 className='tile-font linked-item'>
                Location Dashboard
              </h3>
            </a>
            <img src={location_screenshot} alt="SnowWitch Location Dashboard" className='h-full'/>
            <p className='w-4/5'>Displays current and predicted weather conditions of a selected location</p>
          </div>
          <div className='tile-div-col-center darken-bg'>
            <a href="/snowwitchapp/#/tierlist">
              <h3 className='tile-font linked-item'>
                Tier List
              </h3>
            </a>
            <img src={tierlist_screenshot} alt="SnowWitch Tier List" className='h-full'/>
            <p className='w-4/5'>Ranks current and predicted SnowWitch scores of ski locations</p>

          </div>
          <div className='tile-div-col-center darken-bg'>
            <a href="/snowwitchapp/#/about">
              <h3 className='tile-font linked-item'>
                Grading Rubric
              </h3>
            </a>
            <img src={rubric_screenshot} alt="SnowWitch Grading Rubric" className='h-full'/>
            <p className='w-4/5'>Gives details on the SnowWitch score</p>
          </div>
          <div className='tile-div-col-center darken-bg'>
            <a href="/snowwitchapp/#/packing">
              <h3 className='tile-font linked-item'>
                Packing List
              </h3>
            </a>
            <img src={packing_screenshot} alt="SnowWitch Grading Rubric" className='h-full'/>
            <p className='w-4/5'>Helps you remember everything to bring</p>
          </div>
        </div>
    </div>
  )
}

export default Hero