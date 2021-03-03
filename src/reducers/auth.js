import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    isLoading: false,
    error: null
  },
  reducers: {
    LOGIN: {
      reducer: (state) => {
        state.isLoading = true;
        state.error = null;
      }
    },
    LOGIN_SUCCESS: {
      reducer: (state) => {
        state.isLogin = true;
        state.isLoading = false;
      }
    },
    LOGIN_FAILURE: {
      reducer: (state, action) => {
        state.isLogin = false;
        state.isLoading = false;
        state.error = action.payload;
      }
    },
    LOGOUT: {
      reducer: (state) => {
        state.isLoading = true;
        state.error = null;
      }
    },
    LOGOUT_SUCCESS: {
      reducer: (state) => {
        state.isLogin = true;
        state.isLoading = false;
      }
    },
    LOGOUT_FAILURE: {
      reducer: (state, action) => {
        state.isLogin = false;
        state.isLoading = false;
        state.error = action.payload;
      }
    },
  },
});
