import { createSlice } from "@reduxjs/toolkit";

const playdataSlice = createSlice({
  name: 'playdata',
  initialState: {},
  reducers: {
    LOAD_PLAYDATA(state) {
      state.playdata = null;
      state.error = null;
    },
    LOAD_PLAYDATA_SUCCESS(state, { payload: { data } }) {
      state.playdata = data;
    },
    LOAD_PLAYDATA_FAILURE(state, { payload: { error } }) {
      state.error = error;
    },
  },
});

export const playdataActions = playdataSlice.actions;

export default playdataSlice.reducer;