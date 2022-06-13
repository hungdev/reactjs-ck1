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
      const isExist = state.cart.find(item => item._id === action.payload._id);
      if (isExist) {
        state.cart = state.cart.map(item => {
          if (item._id === action.payload._id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // if (isExist) {
      //   const pod = { ...action.payload, quantity: isExist.quantity + 1 };
      //   state.cart.push(pod);
      // } else {
      //   state.cart.push({ ...action.payload, quantity: 1 });
      // }

    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
  },
});

export const { addProduct, addWishList } = productSlice.actions;

export default productSlice.reducer;
