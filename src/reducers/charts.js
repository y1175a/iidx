import { createSlice } from "@reduxjs/toolkit";

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    list: null,
    loading: false,
    error: null
  },
  reducers: {
    LOAD_CHARTS(state) {
        state.list = null;
        state.loading = true;
        state.error = null;
    },
    LOAD_CHARTS_SUCCESS(state, { payload: { data } }) {
      state.loading = false;
      state.list = data;
    },
    LOAD_CHARTS_FAILURE(state, { payload }) {
      state.loading = false;
      const { error } = payload
      state.error = error;
    },
  },
});

export const chartsActions = chartsSlice.actions;

export default chartsSlice.reducer;