import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    chart: null,
    loading: false,
    error: null
  },
  reducers: {
    LOAD_CHART: {
      reducer: (state, action) => {
        state.loading = true;
        state.error = null;
      },
      prepare: (id) => {
        return { payload: { id } }
      }
    },
    LOAD_CHART_SUCCESS(state, { payload: { data } }) {
      state.loading = false;
      state.chart = data;
    },
    LOAD_CHART_FAILURE(state, { payload }) {
      state.loading = false;
      state.error = payload;
    }
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice.reducer;