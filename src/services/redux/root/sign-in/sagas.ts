import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { HOST } from "../../../config/api";
import { setAuthorizationToken } from "../../../utils/setAuthToken";
import { SignInActionCreators, SUBMIT } from "./actions";

function* submitSignIn({ payload }: any) {
    try {
        const { data } = yield call(axios as any, {
            method: "post",
            url: `${HOST}sign-in`,
            data: payload,
        });
        const { token } = data;
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        yield put(
            SignInActionCreators.successAuth({
                isAuth: true,
                data,
            }),
        );
    } catch (error) {
        console.error(`Ошибка запроса ${error}`);
    }
}

export const SignInSagas = function*() {
    yield all([takeLatest(SUBMIT, submitSignIn)]);
};
