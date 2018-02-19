import * as React from "react";
import { Avatar } from "../avatar/";
import "./style.scss";

export class Navigation extends React.Component {
    public render() {
        return (
            <div className="navigation">
                <div className="logo">Chats Chats</div>
                <div className="links" />
                <div className="account">
                    <Avatar />{" "}
                    <div className="account__title account__title--logout">
                        Log out
                    </div>
                    <div className="account__title account__title--name">
                        Username
                    </div>
                </div>
            </div>
        );
    }
}
