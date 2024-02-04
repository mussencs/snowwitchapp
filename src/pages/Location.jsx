import React from 'react'
import LocationOptions from '../components/LocationOptions'
import AboutData from '../components/AboutData'
import AboutGrading from '../components/AboutGrading'

const Location = () => {
  return (
    <div className='section-div-col tile-spacing-y'>
        <LocationOptions/>
        <AboutData/>
        <AboutGrading/>
    </div>
  )
}

export default Location