import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header />
        <div className='flex items-center justify-center min-h-screen bg-black'>
        <h1 className='text-5xl'><span className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-normal overflow-visible">
        Vibely Welcomes You!
          </span>🍿</h1>
        </div>
    </div>
  )
}

export default Home
