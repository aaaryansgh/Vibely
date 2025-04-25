import React from 'react'
import { IMG_CDN_URL } from '../utils/constraints'

const Moviecard = ({poster_url}) => {
  if(!poster_url) return null;
  return (
    <div className='w-40'>
      <img className='rounded-lg' alt="Movie Card" src={IMG_CDN_URL+poster_url}/>
    </div>
  )
}

export default Moviecard
