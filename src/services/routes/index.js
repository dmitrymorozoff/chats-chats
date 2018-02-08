// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../../views/sign-up";
import SignIn from "../../views/sign-in";
import { Chat } from "../../views/chat";

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={Chat} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
        </Switch>
    );
};

export default Routes;
