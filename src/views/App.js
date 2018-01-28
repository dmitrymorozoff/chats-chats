import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Registration } from "./registration";
import { Chat } from "./chat";
import "normalize.scss/normalize.scss";
import "../styles/global.scss";

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Chat} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </Fragment>
        );
    }
}
