import { put, all, takeLatest } from "redux-saga/effects";
// import * as axios from "axios";
// import { HOST } from "../../../config/api";
// import { setAuthorizationToken } from "../../../utils/setAuthToken";
import { ContactsActionCreators, FAILED_FETCH } from "./actions";

function* fetchContacts({ payload }: any) {
    try {
        console.log("ss");
    } catch (error) {
        yield put(ContactsActionCreators.failedFetch({}));
        console.error(`Ошибка запроса ${error}`);
    }
}

export const ContactsSagas = function*() {
    yield all([takeLatest(FAILED_FETCH, fetchContacts)]);
};
