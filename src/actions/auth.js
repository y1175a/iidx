import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {

    },
    reducers: {
        LOGIN: (state, action) => {
          const { uid, email } = action.payload;
          state.push({ ...state, uid, email })
        }
    }  
})