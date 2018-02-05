import { createAction } from "redux-actions";
const prefix = "SIGN_UP";
export const SUBMIT = `${prefix}_SUBMIT`;

export const SignUpActionCreators = {
    submit: createAction(SUBMIT, data => data),
};
