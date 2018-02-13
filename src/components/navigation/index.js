// @flow
import React, { Component } from "react";
import { Avatar } from "../avatar/";
import "./style.scss";

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="logo">Chats Chats</div>
                <div className="links" />
                <div className="account">
                    <Avatar /> <div className="account__name">Username</div>
                </div>
            </div>
        );
    }
}
