import ImageGallery from 'react-image-gallery';
import { sunny, overcast, snowing, wipeout } from '../assets/images';

const images = [
    {
        original: sunny,
        thumbnail: sunny,
    },
    {
        original: overcast,
        thumbnail: overcast,
    },
    {
        original: snowing,
        thumbnail: snowing,
    },
    {
        original: wipeout,
        thumbnail: wipeout,
    }
]

import React from 'react'

const Gallery = () => {
  return (
    <div className='w-96' alt='SnowWitch snowboarding photos'>
        <ImageGallery items={images} />
    </div>
  )
}

export default Gallery