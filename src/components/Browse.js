import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Seccontainer from './Seccontainer';
const Browse = () => {
  useNowPlaying();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Seccontainer />
    </div>
  )
}

export default Browse
