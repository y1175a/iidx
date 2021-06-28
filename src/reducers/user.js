import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null
  },
  reducers: {
    GET_USER: {
      reducer: (state, action) => {

      },
      prepare: (id) => {
        return { payload: { id }};
      }
    },
    GET_USER_SUCCESS(state, { payload }) {
      state.user = payload;
    },
    GET_USER_FAILURE(state, { payload }) {
      state.error = payload;
    },
    UPDATE_USER_INFO: {
      reducer: (state) => {

      },
      prepare: (user) => {
        return { payload: { ...user }};
      }
    },
    UPDATE_USER_INFO_SUCCESS(state, { payload }) {

    },
    UPDATE_USER_INFO_FAILURE(state, { payload }) {
      state.error = payload;
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;