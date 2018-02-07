import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { SignUpActionCreators } from "./actions";
import axios from "axios";
import { SUBMIT } from "./actions";
import { HOST } from "../../../config/api";

function* submitSignUp({ payload }) {
    try {
        const { data } = yield call(axios, {
            method: "post",
            url: `${HOST}sign-up`,
            data: payload,
        });
        yield put(SignUpActionCreators.setUserData(data));
    } catch (error) {
        console.log(`Ошибка запроса ${error}`);
    }
}

export const SignUpSagas = function*() {
    yield [takeLatest(SUBMIT, submitSignUp)];
};
