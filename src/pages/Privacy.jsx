import React from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'
import PrivacyConsent from '../components/PrivacyConsent'
import PrivacyAbout from '../components/PrivacyAbout'

const Privacy = () => {
  return (
    <div className='section-div-col tile-spacing-y'>
        <PrivacyAbout/>
        <PrivacyConsent/>
        <PrivacyPolicy/>
    </div>
  )
}

export default Privacy