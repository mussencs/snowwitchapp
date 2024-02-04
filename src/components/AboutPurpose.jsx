import React from 'react'

const AboutPurpose = () => {
  return (
    <div className='tile-div-col'>
        <h1 className='section-font'>
            About SnowWitch's Purpose
        </h1>
        <p>
          SnowWitch is a personal project I undertook to explore web app development. I wanted to further my knowledge of React while exploring tailwindcss and AWS. Additionally, I frequently visit Colorado's numerous Ski locations and wanted to display information and locations I care about. Since ski locations are often very large I do not believe a single measurement of recent snowfall is super helpful when deciding which location to visit. I wanted to create a system the considered multiple weather conditions at various sub-locations using a standard rubric. 
        </p>
        <br/>
        <p>
            This project aims to... 
        </p>
        <ul className='px-5 list-disc'>
            <li>Explore serverless web design utilizing AWS</li>
            <li>Utilize React and style elements with tailwindcss</li>
            <li>Provide direct comparisons of forecast data for popular ski areas across Colorado</li>
        </ul>
    </div>
  )
}

export default AboutPurpose