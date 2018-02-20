import { handleActions } from "redux-actions";
import { Account } from "../interfaces/IStore";
import { SUCCESS_AUTH } from "./actions";

const initialState: Account = {
    isAuth: false,
    data: {
        token: "",
        status: 0,
        user: {
            _id: "0",
            firstname: "default",
            email: "default",
            username: "dimon",
        },
    },
};

export const SignInReducer = handleActions(
    {
        [SUCCESS_AUTH]: (state: Account, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
    initialState,
);
