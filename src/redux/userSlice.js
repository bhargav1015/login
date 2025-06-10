// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    password: '',
  },
  reducers: {
    setUserData: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
