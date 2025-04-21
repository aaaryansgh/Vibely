import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { addTrailer } from "../utils/Moviesslice";
import { API_OPTIONS } from "../utils/constraints";

const useTrailerVid=(movieID)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        getMovieVideo();
    },[])
    const getMovieVideo=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,API_OPTIONS)
        const json=await data.json()
        const filterTrailer=json.results.filter((video)=>video.type==='Trailer');
        const trailer=filterTrailer[0];
        dispatch(addTrailer(trailer))  
    }
}
export default useTrailerVid;