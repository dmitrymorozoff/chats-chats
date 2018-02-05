import { handleActions } from "redux-actions";
import { SUBMIT } from "./actions";

const initialState = { accountData: {} };

export const SignUpReducer = handleActions(
    {
        [SUBMIT]: (state, { payload }) => ({
            ...state,
            accountData: { ...payload },
        }),
    },
    initialState,
);
