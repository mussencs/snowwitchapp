import React from 'react'
import TierListTable from '../components/TierListTable'
import AboutData from '../components/AboutData'
import AboutGrading from '../components/AboutGrading'

const TierList = () => {
  return (
    <div className='section-div-col tile-spacing-y'>
        <TierListTable/>
        <AboutData/>
        <AboutGrading/>
    </div>
  )
}

export default TierList