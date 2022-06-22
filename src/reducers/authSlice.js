import { createSlice } from '@reduxjs/toolkit';

const initState = {
  user: null
};

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
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
