import { handleActions } from "redux-actions";
import { SUCCESS_FETCH, FAILED_FETCH } from "./actions";
import { Store } from "../interfaces/IStore";

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
