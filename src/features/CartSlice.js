import { createSlice } from "@reduxjs/toolkit";

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

    increaseItem: (state, action) => {
      let selectedData = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (selectedData) {
        selectedData.quantity = selectedData.quantity++;
      }
    },
    decreaseItem: (state, action) => {
      let selectedData = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (selectedData) {
        selectedData.quantity = selectedData.quantity--;
      }
    },
    deleteItem: (state, action) => {
      let filteredData = state.cart.filter((item) => {
        return item.id === action.payload.id;
      });
      state.cart = filteredData;
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, clearCart, increaseItem, decreaseItem, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
