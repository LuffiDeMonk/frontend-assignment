import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  isMobileMenu: false,
};

const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setMobileMenu: (state) => {
      state.isMobileMenu = !state.isMobileMenu;
    },
  },
});

export const { setCartOpen, setMobileMenu } = NavbarSlice.actions;
export default NavbarSlice.reducer;
