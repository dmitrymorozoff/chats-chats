// @flow
import { handleActions } from "react-actions";
import { SUCCESS_FETCH, FAILED_FETCH } from "./actions";
import { IStore } from "../interfaces/IStore";

const initialState = {};

export const ContactsReducer = handleActions({
    [SUCCESS_FETCH]: (state: IState, { payload }) => ({
        ...state,
        ...payload,
    }),
    [FAILED_FETCH]: (state: IState, { payload }) => ({
        ...state,
        ...payload,
    }),
});
