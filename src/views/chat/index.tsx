import * as React from "react";
import { AddContactButton } from "../../components/add-contact-button/";
import { Navigation } from "../../components/navigation/";
import { Websocket } from "../../components/websocket/";
import { IncomingMessage } from "./components/incoming-message/";
import { OutgoingMessage } from "./components/outgoing-message/";
import { Siderbar } from "./components/sidebar/";
import "./style.scss";

export class Chat extends React.Component {
    public render() {
        return (
            <div className="chat-page">
                <div className="navigation-wrapper">
                    <Navigation />
                </div>
                <div className="chat-section">
                    <div className="sidebar-wrapper">
                        <AddContactButton />
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
