import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { all, fork } from "redux-saga/effects";
import { ContactsReducer } from "../root/contacts/reducers";
import { ContactsSagas } from "../root/contacts/sagas";
import { SignInReducer } from "../root/sign-in/reducers";
import { SignInSagas } from "../root/sign-in/sagas";
import { SignUpSagas } from "../root/sign-up/sagas";

export function* rootSaga() {
    yield all([fork(SignUpSagas), fork(SignInSagas), fork(ContactsSagas)]);
}

export const rootReducer = combineReducers({
    form: formReducer,
    account: SignInReducer,
    contacts: ContactsReducer,
});
