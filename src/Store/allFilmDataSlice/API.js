import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/UseRequest";

const APIs = ['3896198', '0111161', '0068646', '0468569', '0050083', '0110912', '0109830', '1375666', '0137523', '0060196', '0120815', '0099685', '0073486', '0114369', '0102926']

const {get} = UseRequest()

export const fetchAllFilmData = createAsyncThunk("allFilmData/fetchAllFilmData", async() => {

    let result = []

    let func = (index) => {
        return `https://www.omdbapi.com/?i=tt${APIs[index]}&apikey=186be766`
    }

    for(let i = 0; i < APIs.length; i++) {
        const res = await get(func(i));
        result.push(res)
    }

    return result
});
