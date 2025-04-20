import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice"
const AppStore= configureStore(
    {
        reducer:{
            user:userReducer,
        }
    }
)
export default AppStore;