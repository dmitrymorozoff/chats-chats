import axios from "axios";
import { all, call, takeLatest } from "redux-saga/effects";
import { HOST } from "../../../config/api";
import { SUBMIT } from "./actions";

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
