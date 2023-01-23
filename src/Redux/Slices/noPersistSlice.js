import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedShows: [],
  loading: false,
};

export const noPersistSlice = createSlice({
  name: "noPersistSlice",
  initialState,
  reducers: {
    saveSearchedShows: (state, action) => {
      state.searchedShows = [...action.payload];
    },
    updateLoadingState: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { saveSearchedShows, updateLoadingState } = noPersistSlice.actions;

export default noPersistSlice.reducer;
