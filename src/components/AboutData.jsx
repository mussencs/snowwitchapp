import React from 'react'

const AboutData = () => {
  return (
    <div className='tile-div-col'>
        <h1 className='section-font'>
            About Data
        </h1>
        <p>
            The data is provided by the National Weather Service and current forecast can be viewed with their <a href="https://www.weather.gov/documentation/services-web-api" className='linked-item'> API.</a> 
        </p>
        <br/>
        <p>
            Using AWS’s serverless services I store the latest forecast data and use that information to directly compare the last 30 days and the next 7. There are some pros and cons to strictly utilizing forecast data from the National Weather Service.
        </p>
        <br/>
        <p>
            One day I may change my data source, but for now my main motivations for choosing this data is 1) the free cost and 2) I can easily scale out to any area in the United States. 
            Since all the data is forecast it will contain inaccurate historic values. National Weather Service data is generally <a href="https://www.weather.gov/about/nws" className='linked-item'>accurate and reliable </a> but predicting snowfall can be <a href="https://www.5280.com/dont-hate-the-meteorologist-why-predicting-colorado-snowstorms-is-a-complicated-process/" className='linked-item'>difficult and inaccurate.</a>   
        </p>
        <div className='tile-div-col'>
            <h1 className='tile-font'>
                Data Set Pros
            </h1>
            <ul className='px-5 list-disc'>
                <li>Data is free</li>
                <li>Data is not reliant on single data point for an area</li>
                <li>Data is not reliant on manual collection</li>
                <li>Areas without infrastructure can be compared</li>
            </ul>
            <h1 className='tile-font'>
                Data Set Cons
            </h1>
            <ul className='px-5 list-disc'>
                <li>Data can be inaccurate</li>
            </ul>
        </div>

    </div>
  )
}

export default AboutData