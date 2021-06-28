import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false
    },
    reducers: {
        START_LOADING(state) {
            state.loading = true;
        },
        
        FINISH_LOADING(state) {
            state.loading = false;
        }
    },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;
