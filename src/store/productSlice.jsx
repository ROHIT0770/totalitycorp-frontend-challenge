import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
