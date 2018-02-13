// @flow
import { handleActions } from "redux-actions";
import { SUCCESS_AUTH, FAILED_AUTH } from "./actions";
import { IStore } from "../interfaces/IStore";

const initialState = {
    data: {
        isAuth: false,
        user: {
            _id: "0",
            firstname: "default",
            email: "default",
            username: "default",
        },
    },
};

export const SignInReducer = handleActions(
    {
        [SUCCESS_AUTH]: (state: IStore, { payload }) => ({
            ...state,
            ...payload,
        }),
        [FAILED_AUTH]: (state: IStore, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
    initialState,
);
