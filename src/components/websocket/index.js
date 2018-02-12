// @flow
import React, { Component } from "react";
import { WebsocketHelper } from '../../services/websocket/websocket-helper';
import "./style.scss";

export class Websocket extends Component {
    constructor(props) {
        super(props);
        // this.websocket = new WebsocketHelper(serverEnvironment.ws.url);
    }

    public componentDidMount() {
        // this.websocket.connect();
    }

    public render() {
        return null;
    }
}
