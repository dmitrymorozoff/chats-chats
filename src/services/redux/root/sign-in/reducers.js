// @flow
import { handleActions } from "redux-actions";
import { SET_USER_DATA } from "./actions";

const initialState = { accountData: {} };

export const SignInReducer = handleActions(
    {
        [SET_USER_DATA]: (state, { payload }) => ({
            ...state,
            accountData: { ...payload },
        }),
    },
    initialState,
);
