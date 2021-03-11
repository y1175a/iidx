import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: null,
    loading: false,
    error: null
  },
  reducers: {
    LOGIN(state) {
        state.loading = true;
        state.error = null;
    },
    LOGIN_SUCCESS(state, { payload: { uid, email } }) {
        state.login = { uid, email };
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
    LOGOUT_FAILURE(state, { payload }) {
        state.error = payload;
        state.loading = false;
    },
  },
});

export const {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE
} = authSlice.actions

export default authSlice.reducer