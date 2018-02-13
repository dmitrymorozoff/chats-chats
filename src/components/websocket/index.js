// @flow
import React, { Component } from "react";
import { websocketHelper } from "../../services/websocket/websocket-helper";

export class Websocket extends Component {
    constructor(props) {
        super(props);
        this.websocket = websocketHelper;
    }

    componentDidMount() {
        this.websocket.connect();
    }

    render() {
        return null;
    }
}
