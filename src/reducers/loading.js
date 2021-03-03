import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {},
    reducers: {
        START_LOADING:{
            reducer: (state, action) => {
                state.push({
                    ...state,
                    [action.payload]: true,
                })
            },
            prepare: requestType => requestType
        },
        FINISH_LOADING:{
            reducer: (state, action) => {
                state.push({
                    ...state,
                    [action.payload]: false,
                })
            },
            prepare: requestType => requestType
        }
    },
});
