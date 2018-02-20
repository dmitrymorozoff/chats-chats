import { History } from "history";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Account, Store } from "services/redux/root/interfaces/IStore";

interface Props {
    history: History;
    account: Account;
}

export function isAuthorized(ComposedComponent: any) {
    class Authenticate extends React.Component<Props> {
        public componentWillMount() {
            console.log(this.props.account.isAuth);
            if (!this.props.account.isAuth) {
                this.props.history.push("/");
            }
        }
        public componentWillReceiveProps(nextProps: Props) {
            if (
                this.props.account.isAuth !== nextProps.account.isAuth &&
                !nextProps.account.isAuth
            ) {
                this.props.history.push("/");
            }
        }
        public render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    function mapStateToProps(state: Store) {
        return {
            account: state.account,
        };
    }
    return withRouter(connect(mapStateToProps)(Authenticate as any) as any);
}
