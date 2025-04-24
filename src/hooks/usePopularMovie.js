import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constraints";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/Moviesslice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        getPopMovies();
    },[])
    const getPopMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=2',API_OPTIONS);
        const json=await data.json();
        dispatch(addPopularMovies(json.results))
    }
}
export default usePopularMovies;