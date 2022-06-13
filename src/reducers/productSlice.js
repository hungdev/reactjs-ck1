import { createSlice } from '@reduxjs/toolkit';

const initState = {
  // ke hang
  shoes: [],
  wishList: [],
  cart: []
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
  },
});

export const { addProduct, addWishList } = productSlice.actions;

export default productSlice.reducer;
