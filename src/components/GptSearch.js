import React from 'react'
import GptSearchBar from './GptSearchBar'
import Gptmovie from './gptmovie'

const GptSearch = () => {
  return (
    <div className='min-h-screen w-screen'>
      <GptSearchBar />
      <Gptmovie />
    </div>
  )
}

export default GptSearch
