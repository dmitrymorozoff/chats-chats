import { createAction } from "redux-actions";
const prefix = "CONTACTS";

export const FETCH_ALL = `${prefix}_FETCH_ALL`;
export const SUCCESS_FETCH = `${prefix}_SUCCESS_FETCH`;

export const ContactsActionCreators = {
    fetchAll: createAction(FETCH_ALL, (username: string) => username),
    successFetch: createAction(SUCCESS_FETCH, (data: any) => data),
};
