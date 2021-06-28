import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logout: true
  },
  reducers: {
    LOGIN(state, action) {
        state.login = null;
        state.loginError = null;
        state.logout = true;
    },
    LOGIN_SUCCESS(state, { payload: { data } }) {
        const { id, uid, email } = data.user;
        state.login = { id, uid, email };
        state.logout = false;
    },
    LOGIN_FAILURE(state, { payload: { error }}) {
        state.login = null;
        state.loginError = error;
    },
    LOGOUT(state) {
        state.error = null;
    },
    LOGOUT_SUCCESS(state) {
        state.login = null;
    },
    LOGOUT_FAILURE(state, { payload: { error } }) {
        state.logoutError = error;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;