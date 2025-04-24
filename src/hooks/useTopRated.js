import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constraints";
import { useEffect } from "react";
import { addTopRated } from "../utils/Moviesslice";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        getTopMovies();
    },[])
    const getTopMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
        const json=await data.json();
        dispatch(addTopRated(json.results))
    }
}
export default useTopRatedMovies;