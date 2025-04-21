import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-gray-950 pointer-events-none'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='flex space-x-3'>
        <button className=' px-7 py-2 border-2 border-white/20 rounded-lg hover:opacity-70'>Play</button>
        <button className=' px-7 py-2 border-2 border-white/20 rounded-lg hover:opacity-70'>Info</button>
      </div>
    </div>
  )
}

export default Videotitle


