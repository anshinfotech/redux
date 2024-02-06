import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../Reducer/countReducer";

const myStore = configureStore({
    reducer:{
        counter:countReducer
    }
})

export default myStore