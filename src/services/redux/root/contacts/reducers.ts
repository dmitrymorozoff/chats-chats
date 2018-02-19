import { handleActions } from "redux-actions";
import { Contact } from "../interfaces/IStore";
import { SUCCESS_FETCH } from "./actions";

const initialState: any = [];

export const ContactsReducer = handleActions(
    {
        [SUCCESS_FETCH]: (state: Contact[], { payload }: any) => [
            ...state,
            ...payload,
        ],
    },
    initialState,
);
