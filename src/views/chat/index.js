// @flow
import React, { Component } from "react";
import { Siderbar } from "./components/sidebar/";
import "./style.scss";

export class Chat extends Component {
    render() {
        return (
            <div className="chat-page">
                <div className="sidebar-wrapper">
                    <Siderbar />
                </div>
                <div className="chat-wrapper" />
            </div>
        );
    }
}
