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
      prepare: (uid) => {
        return { payload: { uid }};
      }
    },
    GET_USER_SUCCESS(state, { payload }) {
      state.user = payload;
      state.loading = false;
    },
    GET_USER_FAILURE(state, action) {
      state.loading = false;
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;