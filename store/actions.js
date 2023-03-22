import {createAction} from '@reduxjs/toolkit';

const Action = {
    SET_AUTH_STATUS: "SET_AUTH_STATUS"
};

export const setAuthStatus = createAction(Action.SET_AUTH_STATUS,
    (authStatus) => {return {payload: authStatus};});
