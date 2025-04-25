import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constraints";
import { useEffect } from "react";
import { addNowPlayingmovies } from "../utils/Moviesslice";

const useNowPlaying=()=>{
    const dispatch=useDispatch();
    const nowPlayingmovies=useSelector(store=>store.movie.nowPlayingmovies)
    useEffect(()=>{
        if(!nowPlayingmovies){
            getnowplayingmovies();
        }
        
    },[])
    
    const getnowplayingmovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
        const json=await data.json();
        dispatch(addNowPlayingmovies(json.results))
    }
}
export default useNowPlaying
