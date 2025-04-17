import { configureStore } from "@reduxjs/toolkit";
import { allFilmDataReducer } from "./allFilmDataSlice/allFilmDataSlice";

const store = configureStore({
    reducer: {
        allFilmData: allFilmDataReducer
    }
})

export default store;