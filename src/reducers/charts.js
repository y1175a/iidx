import { createSlice } from "@reduxjs/toolkit";

export const chartsSlice = createSlice({
  name: 'charts',
  initialState: {},
  reducers: {
    LOAD_CHART_INFO:{
      reducer: (state, action) => {
        state.push(action.payload);
      }
    },
  },
});
