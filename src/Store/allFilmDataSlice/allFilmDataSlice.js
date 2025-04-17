import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFilmData } from "./API";

const allFilmDataSlice = createSlice({
  name: "allFilmData",
  initialState: { filmData: [], viewFilms: [], wantWatch: [], myRates: []},
  reducers: {
    addWantWatch(state, {payload}) {
        let film = state.filmData.find((el) => el.imdbID === payload)      
            state.wantWatch.push(film)
    },
    deleteWantWatch(state, {payload}) {
        state.wantWatch = state.wantWatch.filter((el) => el.imdbID !== payload)
    },
    addViewFilms(state, {payload}) {
        let film = state.filmData.find((el) => el.imdbID === payload)  
        
        if(!state.viewFilms.find((el) => el.imdbID === film.imdbID)) {
            state.viewFilms.push(film)
        }
        

    },
    rateFilm(state, {payload}) {
      if(state.myRates.length === 0) {
        state.myRates = [payload]
        return
      }
      let film = state.myRates.findIndex((el) => el.film.imdbID === payload.film.imdbID)
      console.log(film);
      
      if(film > -1) {
        state.myRates[film].rate = payload.rate
      } else {
        state.myRates = [...state.myRates, payload]
      }        
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllFilmData.fulfilled, (state, { payload }) => {
      state.filmData = payload;      
    });
  },
});

export const allFilmDataReducer = allFilmDataSlice.reducer;
export const {addWantWatch, deleteWantWatch, addViewFilms, rateFilm} = allFilmDataSlice.actions
export const selectAllFilmData = (state) => state.allFilmData;
