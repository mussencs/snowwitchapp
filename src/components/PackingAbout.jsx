import React from 'react'
import {PackingCategories} from '../constants';

const PackingAbout = () => {
  return (
    <div className='tile-div-col'>
      <h1 className='section-font'>
        SnowWitch's Packing List
      </h1>
      <p>
        A checklist to ensure that you are not forgetting anything at home for your snowboard trip to the mountains
      </p>
      <br/>
      <p>
          Packing Categories 
      </p>
      <ul className='px-5 list-disc'>
          {PackingCategories.map((cat, index) => (
              <li
                  key = {cat.id}
                  className='linked-item'
              >
                  <a href={`#${cat.id}`}>
                      {cat.name}
                  </a>
              </li>
          ))}
      </ul>
    </div>
  )
}

export default PackingAbout