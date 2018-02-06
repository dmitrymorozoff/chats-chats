import { createAction } from "redux-actions";
const prefix = "SIGN_UP";
export const SUBMIT = `${prefix}_SUBMIT`;

export const SignUpActionCreators = {
    submitSignUp: createAction(SUBMIT, values => values),
};
