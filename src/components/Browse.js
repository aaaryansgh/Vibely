import React from 'react'
import Header from './Header'

const Browse = () => {
  return (
    <div>
      <Header />
      <div className='h-[200px] flex justify-center items-center bg-black text-white'>
        <h1 className='text-4xl font-bold mt-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-normal overflow-visible'>Explore</h1>
      </div>
    </div>
  )
}

export default Browse
