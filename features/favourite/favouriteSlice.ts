import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavouriteType = {
  _id: string;
  image: string;
  name: string;
  price: number;
};

interface FavouriteState {
  items: FavouriteType[];
}
const initialState: FavouriteState = {
  items: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<FavouriteType>) => {
      state.items = [...state.items, action.payload];
      //add to favourites
      //make backend call to add to favourites
      //on failure, the item from favourites
      //on success, let it remain in the favourites
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      const updatedCart = state.items.filter(
        (item) => item._id !== action.payload
      );
      state.items = updatedCart;
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;
