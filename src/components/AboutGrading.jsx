import React from 'react'

const AboutGrading = () => {
  return (
    <div className='tile-div-col'>
        <h1 className='section-font'>
            About Grading
        </h1>
        <p>
          Like most things these grades are more or less VIBES and represent my opinion. This is an imperfect solution and should not be taken seriously. I don’t check if the resorts/roads are open or closed so please do your own due diligence before traveling. Snowboarding and Skiing is inherently dangerous, ensure you stay within your skill level and assess weather conditions. SnowWitch does not determine and should not be used to determine if weather conditions are safe for recreation
        </p>
        <br/>
        <p>
          Anyways, I have elected to use a weighted rubric. Every category receives a score between 0 and 105 based on formulas that I will likely change. These scores are multiplied by the corresponding weight and summed. Grades follow a traditional <a href="https://en.wikipedia.org/wiki/Academic_grading_in_the_United_States" className='linked-item'>US A-F System </a>with an additional S grade for over 100%.
        </p>
    </div>
  )
}

export default AboutGrading