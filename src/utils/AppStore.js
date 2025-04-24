import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice"
import moviesReducer from "./Moviesslice"
import gptReducer from "./Gptslice"
import langReducer from "./LangSlice"
const AppStore= configureStore(
    {
        reducer:{
            user:userReducer,
            movie:moviesReducer,
            gpt:gptReducer,
            lang:langReducer,
        }
    }
)
export default AppStore;