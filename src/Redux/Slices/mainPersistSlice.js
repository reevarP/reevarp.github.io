import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allShowsList: [],
  singleShow: {},
  cast: [],
  crew: [],
};

export const mainPersistSlice = createSlice({
  name: "mainPersistSlice",
  initialState,
  reducers: {
    saveAllShows: (state, action) => {
      state.allShowsList = [...action.payload];
    },
    getOneShow: (state, action) => {
      state.singleShow = { ...action.payload };
    },
    getCast: (state, action) => {
      state.cast = [...action.payload];
    },
    getCrew: (state, action) => {
      state.crew = [...action.payload];
    },
  },
});

export const { saveAllShows, getOneShow, getCast, getCrew } = mainPersistSlice.actions;

export default mainPersistSlice.reducer;
