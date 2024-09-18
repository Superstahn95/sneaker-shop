import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("logic to update state");
    },
    removeFromCart: (state, action) => {
      console.log("logic to remove from cart");
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

//get cart items
export const getCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
