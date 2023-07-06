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
      let totalItems = state.cart.reduce((accumulator, currentData) => {
        return currentData.quantity + accumulator;
      }, 0);
      let totalPrice = state.cart.reduce((accumulator, currentData) => {
        return currentData.price + accumulator;
      }, 0);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },

    increaseItem: (state, action) => {
      let selectedData = state.cart.find((item) => item.id === action.payload);
      selectedData.quantity++;
      selectedData.price = selectedData.quantity * selectedData.unitPrice;
      let totalItems = state.cart.reduce((accumulator, currentData) => {
        return currentData.quantity + accumulator;
      }, 0);
      let totalPrice = state.cart.reduce((accumulator, currentData) => {
        return currentData.price + accumulator;
      }, 0);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
    decreaseItem: (state, action) => {
      let selectedData = state.cart.find((item) => item.id === action.payload);
      selectedData.quantity--;
      selectedData.price = selectedData.quantity * selectedData.unitPrice;
      let totalItems = state.cart.reduce((accumulator, currentData) => {
        return currentData.quantity + accumulator;
      }, 0);
      let totalPrice = state.cart.reduce((accumulator, currentData) => {
        return currentData.price + accumulator;
      }, 0);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
    deleteItem: (state, action) => {
      let filteredData = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      state.cart = filteredData;
      let totalItems = state.cart.reduce((accumulator, currentData) => {
        return currentData.quantity + accumulator;
      }, 0);
      let totalPrice = state.cart.reduce((accumulator, currentData) => {
        return currentData.price + accumulator;
      }, 0);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
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
