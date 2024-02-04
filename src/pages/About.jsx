import React from 'react'
import AboutPurpose from '../components/AboutPurpose'
import AboutData from '../components/AboutData'
import AboutGrading from '../components/AboutGrading'
import AboutDesign from '../components/AboutDesign'

const About = () => {
  return (
    <div className='section-div-col tile-spacing-y'>
        <AboutPurpose/>
        <AboutData/>
        <AboutGrading/>
        <AboutDesign/>
    </div>
  )
}

export default About