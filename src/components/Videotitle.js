import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black pointer-events-none'>
      <h1 className='text-xl md:text-4xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
      <div className='flex space-x-3'>
        <button className=' px-2 py-1 md:px-7 md:py-2 border-2 border-white/20 rounded-lg hover:opacity-70'>Play</button>
        <button className='hidden md:inline-block md:px-7 py-2 border-2 border-white/20 rounded-lg hover:opacity-70'>Info</button>
      </div>
    </div>
  )
}

export default Videotitle


