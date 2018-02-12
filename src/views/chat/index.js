// @flow
import React, { Component } from "react";
import { Siderbar } from "./components/sidebar/";
import { IncomingMessage } from "./components/incoming-message/";
import { OutgoingMessage } from "./components/outgoing-message/";
import "./style.scss";

export class Chat extends Component {
    render() {
        return (
            <div className="chat-page">
                <div className="sidebar-wrapper">
                    <Siderbar />
                </div>
                <div className="chat-wrapper">
                    <div className="chat-messages">
                        <IncomingMessage />
                        <OutgoingMessage />
                        <IncomingMessage />
                        <IncomingMessage />
                        <OutgoingMessage />
                    </div>
                    <div className="chat-field">
                        <input
                            className="chat-input"
                            type="text"
                            name="message"
                        />
                        <button className="chat-button">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}
