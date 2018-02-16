// @flow
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { fork, all } from "redux-saga/effects";
import { SignUpSagas } from "../root/sign-up/sagas";
import { SignInSagas } from "../root/sign-in/sagas";
import { ContactsSagas } from "../root/contacts/sagas";
import { SignInReducer } from "../root/sign-in/reducers";
import { ContactsReducer } from "../root/contacts/redusers";

export function* rootSaga() {
    yield all([fork(SignUpSagas), fork(SignInSagas), fork(ContactsSagas)]);
}

export const rootReducer = combineReducers({
    form: formReducer,
    account: SignInReducer,
    contacts: ContactsReducer,
});
