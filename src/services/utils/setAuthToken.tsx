import axios from "axios";

export function setAuthorizationToken(token: string) {
    if (token) {
        axios.defaults.headers.common.Authorization = `${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
}
