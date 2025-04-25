import React, { useRef, useState } from 'react'
import Lang from '../utils/LangConstraint'
import { useDispatch, useSelector } from 'react-redux'
import client from '../utils/OpenAi'
import { API_OPTIONS } from '../utils/constraints'
import { addMovieresult } from '../utils/Gptslice'

const GptSearchBar = () => {
  const [res,setRes]=useState(null)
    const searchtext=useRef();
    const langKey=useSelector((store)=>store.lang.lang)
    const dispatch=useDispatch();
    const searchMovieTMDB=async(movie)=>{
      const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&page=1`, API_OPTIONS)
      const json=await data.json();
      return json.results;
    }
    const handleGptClick=async()=>{
      console.log(searchtext);
      //Make an api call to gpt api and get movie result
      const prompt=`Act as professional movie recommendation system.Show me released ${searchtext.current.value} movie. Only give me names of top 5 movies,comma seperated like the example result given ahead. Example result: gadar, Sholay, Don, Dhoom, Bang bang.`
      const response = await client.chat.completions.create({
        model: "gpt-4.1-mini-2025-04-14",
        messages: [
          {
            role: "user",
            content:prompt,
          },
        ],
      });
      console.log(response.choices);
      setRes(response.choices[0].message.content)
      const gptMovie=response.choices[0].message.content.split(",")
      const promisedata= gptMovie.map((movie)=>searchMovieTMDB(movie));
      const tmdbresult=await Promise.all(promisedata)
      dispatch(addMovieresult({moviename:gptMovie,movieresult:tmdbresult}))
    }
  return (
    <div className='flex flex-col justify-center items-center font-serif min-h-80 bg-black'>
        <div className='flex justify-center items-center'>
            <h1 className='font-serif text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-transparent bg-clip-text leading-normal overflow-visible'>VibelyGPT</h1>
        </div>
      <form className='w-1/2' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' placeholder={Lang[langKey].Placeholder} className='px-4 py-2 m-2 rounded-full mx-20 w-6/12 border text-white border-white/20 bg-white/5' ref={searchtext}/>
        <button className='border border-white/20 bg-white/5 rounded-full px-4 py-2 -mx-10 text-white' onClick={handleGptClick}>{Lang[langKey].Search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
