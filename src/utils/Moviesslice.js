import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        upcoming:null
    },
    reducers:{
        addNowPlayingmovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addUpcoming:(state,action)=>{
            state.upcoming=action.payload
        }
    }
})

export default Movieslice.reducer;
export const {addNowPlayingmovies,addTrailer,addPopularMovies,addTopRated,addUpcoming}=Movieslice.actions;