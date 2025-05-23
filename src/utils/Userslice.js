import { createSlice } from "@reduxjs/toolkit";

const Userslice= createSlice(
    {
        name:"user",
        initialState:null,
        reducers:{
            addUser:(state,action)=>{
                return action.payload
            },
            removeUser:(state)=>{
                return null;
            }
        }
    }
)

export default Userslice.reducer;
export const {addUser,removeUser}=Userslice.actions;