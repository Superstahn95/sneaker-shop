import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {},
    removeFromFavourites: (state, action) => {},
  },
});

const { addToFavourite, removeFromFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;
