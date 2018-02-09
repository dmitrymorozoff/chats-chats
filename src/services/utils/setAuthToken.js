// @flow
import axios from "axios";

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `${token}`;
        console.log(axios.defaults.headers);
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}