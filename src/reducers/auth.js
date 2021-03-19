import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: null,
    loading: false,
    error: null
  },
  reducers: {
    LOGIN(state, action) {
        state.loading = true;
        state.error = null;
    },
    LOGIN_SUCCESS(state, { payload: { data } }) {
        const { uid, email } = data.user;
        state.login = { uid: uid, email: email };
        state.loading = false;
    },
    LOGIN_FAILURE(state, { payload }) {
        state.login = null;
        state.error = payload;
        state.loading = false;
    },
    LOGOUT(state) {
        state.loading = true;
        state.error = null;
    },
    LOGOUT_SUCCESS(state) {
        state.login = null;
        state.loading = false;
    },
    LOGOUT_FAILURE(state, { payload: { err } }) {
        state.error = err;
        state.loading = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;