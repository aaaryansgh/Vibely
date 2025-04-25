import React from 'react'
import { useSelector } from 'react-redux';
import Movielist from './Movielist';

const Gptmovie = () => {
  const gptmovie=useSelector((store)=>store.gpt);
  const{movieresult,moviename}=gptmovie;
  if(!moviename) return <h1 className='text-red-600 3xl font-serif'>No movie found!</h1>
  return (
    <div className='p-4 m-4 text-white'>
      <div>
        {moviename.map((movie,index)=>(
          <Movielist title={movie} movies={movieresult[index]} />
        ))}
      </div>
      
    </div>
  )
}

export default Gptmovie;
