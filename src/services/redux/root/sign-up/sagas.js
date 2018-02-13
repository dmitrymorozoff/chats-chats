// @flow
import { call, put, takeLatest, all } from "redux-saga/effects";
import { SignUpActionCreators, SUBMIT } from "./actions";
import axios from "axios";
import { HOST } from "../../../config/api";

function* submitSignUp({ payload }) {
    try {
        const { redirect } = Object.assign({}, payload);
        delete payload.redirect;
        const { data } = yield call(axios, {
            method: "post",
            url: `${HOST}sign-up`,
            data: payload,
        });
    } catch (error) {
        console.error(`Ошибка запроса ${error}`);
    }
}

export const SignUpSagas = function*() {
    yield all([takeLatest(SUBMIT, submitSignUp)]);
};
