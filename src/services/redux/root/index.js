import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { fork } from "redux-saga/effects";
import { SignUpSagas } from "../root/sign-up/sagas";
const initialReducer = (state = { title: "chats chats" }) => state;

export function* rootSaga() {
    yield [fork(SignUpSagas)];
}

export const rootReducer = combineReducers({
    form: formReducer,
    initialReducer,
});
