import { createSlice } from "@reduxjs/toolkit";

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {},
  reducers: {
    LOAD_CHARTS(state) {
      state.list = null;
      state.error = null;
    },
    LOAD_CHARTS_SUCCESS(state, { payload: { data } }) {
      state.list = data;
    },
    LOAD_CHARTS_FAILURE(state, { payload: { error } }) {
      state.error = error;
    },
  },
});

export const chartsActions = chartsSlice.actions;

export default chartsSlice.reducer;