import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";

export type CartType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: number;
  quantity: number;
};

interface CartState {
  items: CartType[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      console.log("logic to update state");
      //check length of cart
      if (state.items.length < 1) {
        state.items = [action.payload];
      } else {
        let updatedCart: CartType[];
        //check if item with that id exists in the cart
        const itemExist = state.items.find(
          (item) => item._id === action.payload._id
        );
        if (itemExist) {
          // increase the quantity
          updatedCart = state.items.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          );
          state.items = updatedCart;
        } else {
          state.items = [...state.items, action.payload];
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      let updatedCart: CartType[];
      updatedCart = state.items.filter((item) => item._id !== action.payload);
      state.items = updatedCart;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      let updatedCart: CartType[];
      updatedCart = state.items.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      let updatedCart: CartType[];
      updatedCart = state.items.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;

//get cart items
export const getCart = (state: RootState) => state.cart.items;
//get a single item in cart
export const getSingleItem = (state: RootState, id: string) =>
  state.cart.items.find((item) => item._id === id);
export const getCartTotal = (state: RootState) => {
  const prices = state.cart.items.map((item) => item.price * item.quantity);
  const total = prices.reduce((acc, curr) => acc + curr, 0);
  return total;
};
export default cartSlice.reducer;
// callbackfn(previousValue: CartType, currentValue: CartType, currentIndex: number, array: CartType[]): CartType
// export const getTotalCartAmount = (state) =>
//   state.cart.cart.reduce(
//     (total, item) => (total += item.price * item.quantity),
//     0
//   );
