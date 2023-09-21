import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const productId = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productId >= 0) {
        state.cartItems[productId].quantity += 1;
      } else {
        const productQuantity = { ...action.payload, quantity: 1 };
        state.cartItems.push(productQuantity);
      }
    },

    remove: (state, action) => {
      const productId = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[productId].quantity > 1) {
        state.cartItems[productId].quantity -= 1;
      } else if (state.cartItems[productId].quantity === 1) {
        const cartProducts = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = cartProducts;
      }
    },

    removeAll: (state, action) => {
      const cartProducts = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = cartProducts;
    },

    calculateTotal: (state, action) => {
      let { amount, quantity } = state.cartItems.reduce(
        (subTotal, cartItems) => {
          const { price, quantity } = cartItems;
          const itemTotal = price * quantity;

          subTotal.amount += itemTotal;
          subTotal.quantity += quantity;

          return subTotal;
        },
        {
          amount: 0,
          quantity: 0,
        }
      );
      amount = parseFloat(amount.toFixed(2));
      state.totalAmount = amount;
      state.totalQuantity = quantity;
    },
  },
});

export const { add, remove, removeAll, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
