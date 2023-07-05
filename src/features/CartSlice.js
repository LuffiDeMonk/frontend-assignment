import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let repeatedData = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (repeatedData) {
        repeatedData.quantity = repeatedData.quantity + action.payload.quantity;
        repeatedData.price = repeatedData.price + action.payload.price;
      } else {
        state.cart.push(action.payload);
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
