import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingmovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})

export default Movieslice.reducer;
export const {addNowPlayingmovies,addTrailer}=Movieslice.actions;