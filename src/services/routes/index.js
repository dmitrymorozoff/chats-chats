// @flow
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "../../views/sign-up";
import SignIn from "../../views/sign-in";
import { Chat } from "../../views/chat";
import { connect } from "react-redux";

type Props = {
    isAuth: boolean,
};

const Routes = props => {
    const { isAuth } = props;
    return (
        <Switch>
            <Route exact path="/" component={Chat} />
            <Route
                path="/sign-up"
                render={() => (!isAuth ? <SignUp /> : <Redirect to="/" />)}
            />
            <Route
                path="/sign-in"
                render={() => (!isAuth ? <SignIn /> : <Redirect to="/" />)}
            />
        </Switch>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.account.data.isAuth,
    };
};
const mapDispatchToPorps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToPorps)(Routes);
