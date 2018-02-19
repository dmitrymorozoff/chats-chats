import * as React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Chat } from "../../views/chat";
import SignIn from "../../views/sign-in";
import SignUp from "../../views/sign-up";
import { Account, Store } from "../redux/root/interfaces/IStore";

interface Props {
    account: Account;
}

const Routes = (props: Props) => {
    console.log(props);
    const { account: { data: { isAuth } } } = props;
    return (
        <Switch>
            <Route path="/" component={Chat} />
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

const mapStateToProps = (state: Store) => {
    return {
        account: state.account,
    };
};
const mapDispatchToPorps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToPorps)(Routes as any);
