// @flow
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./sign-up";
import SignIn from "./sign-in";
import { Chat } from "./chat";
import "normalize.scss/normalize.scss";
import "../styles/global.scss";

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Chat} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                </Switch>
            </Fragment>
        );
    }
}
