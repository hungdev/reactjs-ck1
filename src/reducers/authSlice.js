import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../services/api';

const initState = {
  user: null
};


export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (account, thunkAPI) => {
    const response = await login(account);
    // console.log('response111', response.data.token);
    return response.data.token;
  }
);

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    }
  },
  extraReducers: {
    // fetch product detail
    // [fetchLogin.pending]: (state, action) => {
    //   state.loading = true;
    // },
    [fetchLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload; // action.payload chinh là data trả về từ api dòng 15
    },
    // [fetchLogin.rejected]: (state, action) => {
    //   state.productDetail = {};
    // },

  }
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
