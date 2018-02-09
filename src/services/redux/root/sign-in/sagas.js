// @flow
import { call, put, takeLatest, all } from "redux-saga/effects";
import { SignInActionCreators, SUBMIT, SET_USER_DATA } from "./actions";
import axios from "axios";
import { HOST } from "../../../config/api";
import { setAuthorizationToken } from "../../../utils/setAuthToken";

function* submitSignIn({ payload }) {
    try {
        const { redirect } = Object.assign({}, payload);
        delete payload.redirect;
        const { data } = yield call(axios, {
            method: "post",
            url: `${HOST}sign-in`,
            data: payload,
        });
        const { token } = data;
        console.log(data);
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        yield put(SignInActionCreators.setUserData(data));
        redirect();
    } catch (error) {
        console.error(`Ошибка запроса ${error}`);
    }
}
export const SignInSagas = function*() {
    yield all([takeLatest(SUBMIT, submitSignIn)]);
};
