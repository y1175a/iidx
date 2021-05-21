import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null
  },
  reducers: {
    GET_USER: {
      reducer: (state, action) => {
        state.loading = true
      },
      prepare: (id) => {
        return { payload: { id }};
      }
    },
    GET_USER_SUCCESS(state, { payload }) {
      state.user = payload;
      state.loading = false;
    },
    GET_USER_FAILURE(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    UPDATE_USER_INFO: {
      reducer: (state) => {
        state.loading = true;
      },
      prepare: (user) => {
        return { payload: { ...user }};
      }
    },
    UPDATE_USER_INFO_SUCCESS(state, { payload }) {
      state.loading = false;
    },
    UPDATE_USER_INFO_FAILURE(state, { payload }) {
      state.loading = false;
      state.error = payload;
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;