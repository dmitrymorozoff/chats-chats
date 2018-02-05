import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { SignUpActionCreators } from "./actions";
import axios from "axios";
import { SUBMIT } from "./actions";
import { HOST } from "../../../config/api";

function* submitSignUp(action) {
    try {
        const data = yield call(axios.get, `${HOST}sign-up"`);
        yield put(SignUpActionCreators.submit(data));
    } catch (error) {
        console.log(`Ошибка запроса ${error}`);
    }
}

export const SignUpSagas = function*() {
    yield [takeLatest(SUBMIT, submitSignUp)];
};
