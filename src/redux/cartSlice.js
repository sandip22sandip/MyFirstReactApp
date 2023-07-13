import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addProduct: (state, action) => {
      const { userId, product } = action.payload;

      if (!state[userId]) {
        state[userId] = [];
      }

      const item = state[userId].find((item) => item.id === product.id);
      if (item) {
        item.quantity += product.quantity;
      } else {
        state[userId].push(product);
      }
    },
    removeProduct: (state, action) => {
      const { userId, productId } = action.payload;

      if (state[userId]) {
        state[userId] = state[userId].filter((item) => item.id !== productId);
      }
    },
    resetCart: (state, action) => {
      const { userId } = action.payload;

      if (state[userId]) {
        state[userId] = [];
      }
    },
  },
});

export const { addProduct, removeProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
