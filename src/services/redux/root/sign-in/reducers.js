// @flow
import { handleActions } from "redux-actions";
import { SUCCESS_AUTH, FAILED_AUTH } from "./actions";

const initialState = {
    data: {
        isAuth: true,
    },
};

export const SignInReducer = handleActions(
    {
        [SUCCESS_AUTH]: (state, { payload }) => ({
            ...state,
            data: { ...payload },
        }),
        [FAILED_AUTH]: (state, { payload }) => ({
            ...state,
            data: { ...payload },
        }),
    },
    initialState,
);
