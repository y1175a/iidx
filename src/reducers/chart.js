import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: 'chart',
  initialState: {},
  reducers: {
    LOAD_CHART: {
      reducer: (state, action) => {
        state.chart = null;
        state.error = null;
      },
      prepare: (id) => {
        return { payload: { id } }
      }
    },
    LOAD_CHART_SUCCESS(state, { payload: { data } }) {
      state.chart = data;
    },
    LOAD_CHART_FAILURE(state, { payload: { error } }) {
      state.error = error;
    }
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice.reducer;