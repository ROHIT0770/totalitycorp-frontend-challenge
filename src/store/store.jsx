import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { calculateTotal } from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
