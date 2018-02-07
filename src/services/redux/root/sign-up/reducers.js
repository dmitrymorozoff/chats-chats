import { handleActions } from "redux-actions";
import { SET_USER_DATA } from "./actions";

const initialState = { accountData: {} };

export const SignUpReducer = handleActions(
    {
        [SET_USER_DATA]: (state, { payload }) => ({
            ...state,
            data: { ...payload },
        }),
    },
    initialState,
);
