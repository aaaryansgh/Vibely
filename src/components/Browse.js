import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Seccontainer from './Seccontainer';
import usePopularMovies from '../hooks/usePopularMovie';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();
  const flag=useSelector((store)=>store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {flag?<GptSearch />:
      <>
        <Maincontainer />
        <Seccontainer />
      </>}
      
     
    </div>
  )
}

export default Browse
