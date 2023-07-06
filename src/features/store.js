import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "../components/Navbar/NavbarSlice";
import CartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    navbar: NavbarReducer,
  },
});
