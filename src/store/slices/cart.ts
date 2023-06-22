import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps } from "../../models/components";

interface CartState {
  cart: ItemProps[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ItemProps>) => {
      const item = action.payload;
      state.cart.push(item);
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
