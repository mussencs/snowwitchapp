import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { RiSurveyLine } from 'react-icons/ri'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='section-div-row nav-element bg-indigo-100 react-icon space-x-2'>
            <a href="/snowwitchapp/#/privacy" className='linked-item'>
                Privacy Policy
            </a>
            <a href='https://forms.gle/7LuHmQcTjKsMAJK7A' className='linked-item'>
                <RiSurveyLine size={'3em'}/>
            </a>
            <a href='https://github.com/mussencs/snowwitchapp' className='linked-item'>
                <FaGithub size={'3em'}/>
            </a>   
        </div>
      )
}

export default Footer