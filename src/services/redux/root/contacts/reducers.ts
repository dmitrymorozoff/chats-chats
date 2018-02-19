import { handleActions } from "redux-actions";
import { Store } from "../interfaces/IStore";
import { FAILED_FETCH, SUCCESS_FETCH } from "./actions";

const initialState: any = {};

export const ContactsReducer = handleActions(
    {
        [SUCCESS_FETCH]: (state: Store, { payload }: any) => ({
            ...state,
            ...payload,
        }),
        [FAILED_FETCH]: (state: Store, { payload }: any) => ({
            ...state,
            ...payload,
        }),
    },
    initialState,
);
