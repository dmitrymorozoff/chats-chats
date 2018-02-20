import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { isAuthorized } from "../../utils/hocs/isAuthorized";
import { Chat } from "../../views/chat";
import { HomePage } from "../../views/home";
import SignIn from "../../views/sign-in";
import SignUp from "../../views/sign-up";
import { Account, Store } from "../redux/root/interfaces/IStore";

interface Props {
    account: Account;
}

const Routes = (props: Props) => {
    return (
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/chat" component={isAuthorized(Chat)} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
        </Switch>
    );
};

const mapStateToProps = (state: Store) => {
    return {
        account: state.account,
    };
};
const mapDispatchToProps = (dispatch: any) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    Routes as any,
) as any);
