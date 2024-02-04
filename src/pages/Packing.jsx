import React from 'react'
import ItemsList from '../components/ItemsList'
import PackingAbout from '../components/PackingAbout'

const Packing = () => {
  return (
    <div className='section-div-col tile-spacing-y'>
        <PackingAbout/>
        <ItemsList/>
    </div>
  )
}

export default Packing