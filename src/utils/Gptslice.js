import { createSlice } from "@reduxjs/toolkit";

const Gptslice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;

        }
    }
})
export default Gptslice.reducer;
export const {toggleGptSearchView}=Gptslice.actions