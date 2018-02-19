import * as React from "react";
import {
    websocketHelper,
    WebsocketHelper,
} from "../../services/websocket/websocket-helper";

export class Websocket extends React.Component {
    private websocket: WebsocketHelper;
    constructor(props: any) {
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
