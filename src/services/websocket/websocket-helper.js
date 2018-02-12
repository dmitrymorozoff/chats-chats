// @flow
import socketIOClient from "socket.io-client";

export class WebsocketHelper {
    constructor(address: string) {
        this.address = address;
        this.socket = null;
    }
    connect() {
        this.socket = socketIOClient(this.address);
        this.socket.on("*", this.recieveMessages(event, data).bind(this));
    }
    static sendMessage(type, data) {
        this.socket.emit(type, data);
    }
    recieveMessages(event, data) {
        console.log(event);
        console.log(data);
    }
}
