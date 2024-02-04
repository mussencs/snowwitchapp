import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { RiSurveyLine } from 'react-icons/ri'
import { SiStrava } from 'react-icons/si'

const Footer = () => {
    return (
        <div className='section-div-row nav-element bg-indigo-100 react-icon space-x-2'>
            <a href="/snowwitchapp/privacy" className='linked-item'>
                Privacy Policy
            </a>
            <a href='https://instagram.com/snowwitch.io?igshid=YmMyMTA2M2Y=' className='linked-item'>
                <FiInstagram size={'3em'}/>
            </a>
            <a href='https://forms.gle/7LuHmQcTjKsMAJK7A' className='linked-item'>
                <RiSurveyLine size={'3em'}/>
            </a>
            <a href='https://www.strava.com/clubs/1119945' className='linked-item'>
                <SiStrava size={'3em'}/>
            </a>   
        </div>
      )
}

export default Footer