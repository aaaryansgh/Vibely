import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constraints";
import { useEffect } from "react";
import { addUpcoming } from "../utils/Moviesslice";

const useUpcoming=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        getUpcoming();
    },[])
    const getUpcoming=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2',API_OPTIONS);
        const json=await data.json();
        dispatch(addUpcoming(json.results))
    }
}
export default useUpcoming;