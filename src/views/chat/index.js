// @flow
import React, { Component } from "react";
import { Siderbar } from "./components/sidebar/";
import { IncomingMessage } from "./components/incoming-message/";
import { OutgoingMessage } from "./components/outgoing-message/";
import { NewUserButton } from "../../components/new-user-button/";
import { Websocket } from "../../components/websocket/";
import { Navigation } from "../../components/navigation/";
import "./style.scss";

export class Chat extends Component {
    render() {
        return (
            <div className="chat-page">
                <div className="navigation-wrapper">
                    <Navigation />
                </div>
                <div className="chat-section">
                    <div className="sidebar-wrapper">
                        <NewUserButton />
                        <label className="search-label">
                            <input
                                className="search-users"
                                type="text"
                                name="message"
                                placeholder="Search"
                            />
                            <Siderbar />
                        </label>
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
                            <button className="chat-button" />
                        </div>
                    </div>
                </div>
                <Websocket />
            </div>
        );
    }
}
