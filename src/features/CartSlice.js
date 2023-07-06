import { createSlice } from "@reduxjs/toolkit";

//defining the initial state of the application

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

//creating a slice instance of cart using createslice function
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //to check if the item is already present in the cart
      let repeatedData = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (repeatedData) {
        //increament the quantity and price of the item if it is present
        repeatedData.quantity = repeatedData.quantity + action.payload.quantity;
        repeatedData.price = repeatedData.price + action.payload.price;
      } else {
        //add new item to the cart
        state.cart.push(action.payload);
      }
      //compute total items added to the cart
      let totalItems = state.cart.reduce((accumulator, currentData) => {
        return currentData.quantity + accumulator;
      }, 0);
      //compute total price of the items added to the cart
      let totalPrice = state.cart.reduce((accumulator, currentData) => {
        return currentData.price + accumulator;
      }, 0);
      //updating state after the action is performed
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },

    increaseItem: (state, action) => {
      //check the index of the item in the cart array
      let selectedData = state.cart.find((item) => item.id === action.payload);
      //increase the quantity of item by one
      selectedData.quantity++;
      //compute the total price for pruchasing the given quantity of item
      selectedData.price = selectedData.quantity * selectedData.unitPrice;
      //compute total items added to the cart
      let totalItems = state.cart.reduce((accumulator, currentData) => {
        return currentData.quantity + accumulator;
      }, 0);
      //compute total price of the items added to the cart
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
