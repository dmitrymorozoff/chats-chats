// @flow
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { fork, all } from "redux-saga/effects";
import { SignUpSagas } from "../root/sign-up/sagas";
import { SignUpReducer } from "../root/sign-up/reducers";

export function* rootSaga() {
    yield all([fork(SignUpSagas)]);
}

export const rootReducer = combineReducers({
    form: formReducer,
    account: SignUpReducer,
});
