import * as axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { HOST } from "../../../config/api";
import { ContactsActionCreators, FETCH_ALL } from "./actions";

function* fetchContacts({ payload }: any) {
    try {
        const { data } = yield call(axios as any, {
            method: "get",
            url: `${HOST}contacts?username=${payload}`,
        });
        yield put(ContactsActionCreators.successFetch(data));
    } catch (error) {
        console.error(`Ошибка запроса ${error}`);
    }
}

export const ContactsSagas = function*() {
    yield all([takeLatest(FETCH_ALL, fetchContacts)]);
};
