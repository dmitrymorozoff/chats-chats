import { History } from "history";
import "normalize.scss/normalize.scss";
import "normalize.scss/normalize.scss";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Account, Store } from "services/redux/root/interfaces/IStore";
import { SignInActionCreators } from "../services/redux/root/sign-in/actions";
import Routes from "../services/routes/";
import "../styles/global.scss";

interface Props {
    history: History;
    account: Account;
    auth: any;
}

export class Main extends React.Component<Props> {
    public componentWillMount() {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            this.props.auth(token);
        }
    }
    public componentWillReceiveProps(nextProps: Props) {
        if (
            this.props.account.isAuth !== nextProps.account.isAuth &&
            nextProps.account.isAuth
        ) {
            this.props.history.push("/chat");
        }
    }
    public render() {
        return (
            <>
                <Routes />
            </>
        );
    }
}

const mapStateToProps = (state: Store) => ({
    account: state.account,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        auth: (token: string) => {
            dispatch(SignInActionCreators.auth(token));
        },
    };
};

export const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(
    Main as any,
) as any);
