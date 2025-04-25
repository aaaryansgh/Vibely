import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies}) => {
    
  return (
    <div className='px-6 bg-opacity-30'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-extralight my-5 text-slate-500'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex gap-3'>
                    {movies?.map((movie)=>(
                        <Moviecard key={movie.id} poster_url={movie.poster_path} />
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Movielist
