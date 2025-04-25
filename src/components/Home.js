import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Home = () => {
  const user=useSelector((store)=>store.user)
  return (
    <div>
        <Header />
        <div className='flex items-center justify-center w-full min-h-screen bg-black p-4 sm:p-6'>
  {user ? (
    <div className='max-w-screen-xl w-full'>
      <h1 className='text-4xl md:text-6xl lg:text-8xl text-white font-serif font-thin text-center md:text-center'>
        Vibely Welcomes{' '}
        <span className="mt-2 md:mt-0 text-4xl md:text-6xl lg:text-8xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          {user.displayName}!
        </span>
      </h1>
    </div>
  ) : (
    <div className='max-w-screen-xl w-full text-center'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl'>
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold">
          Vibely Welcomes You!
        </span>
        <span className="block sm:inline-block mt-2 sm:mt-0 sm:ml-2">🍿</span>
      </h1>
    </div>
  )}
</div>
    </div>
  )
}

export default Home
