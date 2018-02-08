// @flow
import { createAction } from "redux-actions";
const prefix = "SIGN_UP";
export const SUBMIT = `${prefix}_SUBMIT`;
export const SET_USER_DATA = `${prefix}_SET_USER_DATA`;

export const SignUpActionCreators = {
    submitSignUp: createAction(SUBMIT, values => values),
    setUserData: createAction(SET_USER_DATA, values => values),
};
