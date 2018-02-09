// @flow
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { fork, all } from "redux-saga/effects";
import { SignUpSagas } from "../root/sign-up/sagas";
import { SignInSagas } from "../root/sign-in/sagas";
import { SignInReducer } from "../root/sign-in/reducers";

export function* rootSaga() {
    yield all([fork(SignUpSagas), fork(SignInSagas)]);
}

export const rootReducer = combineReducers({
    form: formReducer,
    account: SignInReducer,
});
