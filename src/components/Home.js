import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Home = () => {
  const user=useSelector((store)=>store.user)
  return (
    <div>
        <Header />
        <div className='flex items-center w-screen min-h-screen bg-black'>
          {user?
          (<h1 className='text-8xl ml-20 text-white font-serif font-thin '>Vibely Welcomes <span className="text-8xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-normal overflow-visible font-serif">
           {user.displayName}!
            </span></h1>):
            (<h1 className='text-5xl'><span className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-normal overflow-visible">
        Vibely Welcomes You!
          </span>🍿</h1>)
          }
        
        </div>
    </div>
  )
}

export default Home
