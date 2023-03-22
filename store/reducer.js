import {createReducer} from '@reduxjs/toolkit';

import {setAuthStatus} from "./actions";


const initialState = {
    authStatus: false
};

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setAuthStatus, (state, action) => {
        state.authStatus = action.payload;
    })
})
