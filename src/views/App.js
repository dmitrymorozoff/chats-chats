// @flow
import React, { Component, Fragment } from "react";
import Routes from "../services/routes/";
import "normalize.scss/normalize.scss";
import "../styles/global.scss";

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Routes />
            </Fragment>
        );
    }
}
