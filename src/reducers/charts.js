import { createSlice } from "@reduxjs/toolkit";

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    list: null,
    loading: false,
    error: null
  },
  reducers: {
    LOAD_CHARTS: {
      reducer: (state, action) => {
        state.loading = true;
        state.error = null;
      },
      prepare: (page) => {
        return page ? { payload: { page } } : { payload: null }
      }
    },
    LOAD_CHARTS_SUCCESS(state, { payload: { data } }) {
      state.loading = false;
      state.list = data;
    },
    LOAD_CHARTS_FAILURE(state, { payload }) {
      state.loading = false;
      state.error = payload;
    }
  },
});

export const chartsActions = chartsSlice.actions;

export default chartsSlice.reducer;