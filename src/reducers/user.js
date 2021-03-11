import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null
  },
  reducers: {
    GET_USER(state, action) {
      state.loading = true
    },
    GET_USER_SUCCESS(state, { payload: { data } }) {
      const { user } = data;
      state.user = user;
      state.loading = false;
    },
    GET_USER_FAILURE(state, action) {
      state.loading = false;
    }
  },
});
