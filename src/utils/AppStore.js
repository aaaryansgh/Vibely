import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice"
import moviesReducer from "./Moviesslice"
const AppStore= configureStore(
    {
        reducer:{
            user:userReducer,
            movie:moviesReducer
        }
    }
)
export default AppStore;