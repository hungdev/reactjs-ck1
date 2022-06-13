import { createSlice } from '@reduxjs/toolkit';

const initState = {
  // ke hang
  shoes: [],
  electrics: [],
  cart: []
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    }
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
