import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { setCartOpen } = NavbarSlice.actions;
export default NavbarSlice.reducer;
