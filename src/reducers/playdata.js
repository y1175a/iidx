import { createSlice } from "@reduxjs/toolkit";

export const playdataSlice = createSlice({
  name: 'playdata',
  initialState: {},
  reducers: {
    LOAD_PLAYDATA:{
      reducer: (state, action) => {
        state.push(action.payload);
      }
    },
  },
});