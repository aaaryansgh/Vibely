import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import Videoback from './videoback'

const Maincontainer = () => {
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies)
    if(!movies) return; //if movie is not present then return. it won't throw an error
    const mainMovie=movies[0];
    const {original_title,overview}=mainMovie
  return (
    <div className='pt-[10%] md:pt-0 bg-black'>
      <Videotitle title={original_title} overview={overview} />
      <Videoback movieID={mainMovie.id} />
    </div>
  )
}

export default Maincontainer
