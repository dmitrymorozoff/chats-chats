// @flow
import { call, put, all, takeLates } from "redux-saga/effects";
import axios from "axios";
import { HOST } from "../../../config/api";
import { setAuthorizationToken } from "../../../utils/setAuthToken";
import { ContactsActionCreators, FETCH_SUCCESS, FETCH_FAILED } from "./actions";

function* fetchContacts({ payload }) {
    try {
    } catch (error) {
        yield put(ContactsActionCreators.fetchFailed({}));
        console.error(`Ошибка запроса ${error}`);
    }
}

export const ContactsSagas = function*() {
    yield all([takeLatest(FETCH_SUCCESS, fetchContacts)]);
};
