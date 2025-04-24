import React from 'react'
import Lang from '../utils/LangConstraint'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.lang.lang)
  return (
    <div className='flex justify-center items-center font-serif min-h-screen w-screen bg-black'>
        <div className='flex justify-center items-center'>
            <h1 className=' text-4xl font-serif text-white'>VibelyGPT</h1>
        </div>
      <form className='w-1/2'>
        <input type='text' placeholder={Lang[langKey].Placeholder} className='px-4 py-2 m-2 rounded-full mx-20 w-6/12 border text-white border-white/20 bg-white/5' />
        <button className='border border-white/20 bg-white/5 rounded-full px-4 py-2 -mx-10 text-white'>{Lang[langKey].Search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
