import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductDetail } from '../services/api';

const initState = {
  // ke hang
  shoes: [],
  wishList: [],
  cart: [],
  productDetail: {}
};

export const fetchProductDetail = createAsyncThunk(
  'products/fetchProductDetail',
  async (productId, thunkAPI) => {
    const response = await getProductDetail(productId);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      // kiem tra san pham co nam trong gio hang hay khong
      const isExist = state.cart.find(item => item._id === action.payload._id);
      if (isExist) { // nếu sp đó đã nằm trong giỏ hàng
        state.cart = state.cart.map(item => { // loop qua các sp trong giỏ hàng
          if (item._id === action.payload._id) { // kiểm tra sản phẩm đó có _id giống action.payload._id không
            item.quantity += 1; // giống thì tăng lên 1
          }
          return item;
        });
      } else { // nếu chưa có thì đẩy sp đó vào giỏ hàng và gán số lượng quantity = 1
        // console.log('action.payload', action.payload);
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id);
    },
    changeQuantity: (state, action) => {
      state.cart = state.cart.map(item => { // lặp qua các item trong list cart
        if (item._id === action.payload._id) { // nếu item mà nó lặp qua = với item mà mình gửi vào
          item.quantity = action.payload.quantity; // thì update quantity
        }
        return item;
      });
    },
  },

  extraReducers: {
    // fetch product detail
    // [fetchProductDetail.pending]: (state, action) => {
    //   state.loading = true;
    // },
    [fetchProductDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.productDetail = action.payload.data; // action.payload chinh là data trả về từ api dòng 15
    },
    // [fetchProductDetail.rejected]: (state, action) => {
    //   state.productDetail = {};
    // },

  }
});

export const { addProduct, addWishList, changeQuantity, removeItem } = productSlice.actions;

export default productSlice.reducer;
