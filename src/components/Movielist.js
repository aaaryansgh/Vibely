import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies}) => {
    
  return (
    <div className='px-4 md:px-6 bg-opacity-30'>
    <div className='flex flex-col gap-3 md:gap-4'>
        <h1 className='text-xl md:text-3xl font-extralight my-3 md:my-5 text-slate-500'>
            {title}
        </h1>
        <div className='relative'>
            <div className='flex overflow-x-auto pb-2 no-scrollbar'>
                <div className='flex gap-4 md:gap-2'>
                    {movies?.map((movie) => (
                        <div key={movie.id} className='flex w-36 md:w-48'>
                            <Moviecard poster_url={movie.poster_path} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Movielist
