import { History } from "history";
import * as React from "react";
import { withRouter } from "react-router";
import "./style.scss";

interface Props {
    history: History;
}

class Home extends React.Component<Props> {
    public handleSignIn = () => {
        this.props.history.push("/sign-in");
    };
    public handleSignUp = () => {
        this.props.history.push("/sign-up");
    };
    public render() {
        return (
            <div className="homepage">
                <div className="homepage-title">
                    Get your free account ChatsChats now
                </div>
                <div className="homepage-button-wrapper">
                    <button
                        className="button homepage-button"
                        onClick={this.handleSignIn}
                    >
                        Sign In
                    </button>
                    <button
                        className="button homepage-button"
                        onClick={this.handleSignUp}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        );
    }
}

export const HomePage = withRouter(Home as any);
