import { createSlice } from "@reduxjs/toolkit";

const Gptslice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieresult:null,
        moviename:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addMovieresult:(state,action)=>{
            const {movieresult,moviename}=action.payload
            state.moviename=moviename;
            state.movieresult=movieresult
        }

    }
})
export default Gptslice.reducer;
export const {toggleGptSearchView,addMovieresult}=Gptslice.actions