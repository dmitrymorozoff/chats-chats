import { call, takeLatest, all } from "redux-saga/effects";
import { SUBMIT } from "./actions";
import axios from "axios";
import { HOST } from "../../../config/api";

function* submitSignUp({ payload }: any) {
    try {
        yield call(axios as any, {
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
