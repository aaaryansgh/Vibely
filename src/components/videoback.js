import React from 'react'
import { useSelector } from 'react-redux'
import useTrailerVid from '../hooks/useTrailerVid'


const Videoback = ({movieID}) => {
    const trailerVideo=useSelector((store)=>store.movie?.trailerVideo)
    useTrailerVid(movieID)
  return (
    <div>
      <iframe
       className='w-screen aspect-video'
       src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&rel=0&fs=1`}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share,fullscreen" 
       allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default Videoback
