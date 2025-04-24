import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Seccontainer = () => {
  const movies=useSelector((store)=>store.movie)
  return (
    <div className=''>
      <Movielist title={"Now playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Popular movies"} movies={movies.popularMovies} />
      <Movielist title={"Top rated movies"} movies={movies.topRated} />
      <Movielist title={"Upcoming movies"} movies={movies.upcoming} />
    </div>
  )
}

export default Seccontainer
