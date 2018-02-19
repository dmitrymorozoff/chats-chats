import { createAction } from "redux-actions";

const prefix = "SIGN_IN";
export const SUBMIT = `${prefix}_SUBMIT`;
export const SUCCESS_AUTH = `${prefix}_SUCCESS_AUTH`;
export const FAILED_AUTH = `${prefix}_FAILED_AUTH`;

export const SignInActionCreators = {
    submitSignIn: createAction(SUBMIT, (values: any) => values),
    successAuth: createAction(SUCCESS_AUTH, (values: any) => values),
    failedAuth: createAction(FAILED_AUTH, (values: any) => values),
};
