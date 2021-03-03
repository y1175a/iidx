import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    CHECK_USER:{
      reducer: (state, action) => {
        state.push(action.payload);
      }
    },
  },
});
