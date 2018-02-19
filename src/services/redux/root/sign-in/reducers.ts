import { handleActions } from "redux-actions";
import { Account } from "../interfaces/IStore";
import { FAILED_AUTH, SUCCESS_AUTH } from "./actions";

const initialState: Account = {
    data: {
        token: "",
        status: 0,
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
        [SUCCESS_AUTH]: (state: Account, { payload }) => ({
            ...state,
            ...payload,
        }),
        [FAILED_AUTH]: (state: Account, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
    initialState,
);
