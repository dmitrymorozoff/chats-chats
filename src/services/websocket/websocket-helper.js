// @flow
import io from "socket.io-client";
import { joinHandler } from "./utils/join-handler";
import { JOIN } from "../../constants/events";

class WebsocketHelper {
    constructor(address: string) {
        this.isConnected = false;
        this.address = address;
        this.socket = undefined;
    }
    static sendMessage(event: string, data: string | object | number) {
        console.log(WebsocketHelper.socket);
        WebsocketHelper.socket.emit(event, data);
    }
    connect() {
        this.socket = io(this.address);
        this.socket.on("connect", () => {
            this.isConnected = true;
            console.info(
                `socket successfully connectes, id: ${this.socket.id}`,
            );
            emit(JOIN, { username: "test" });
        });
        this.socket.on(JOIN, joinHandler);
    }
    get socketInstance() {
        return this.socket;
    }
    recieveMessages(event: string, data: string | object | number) {
        console.log(event);
        console.log(data);
    }
}

export const websocketHelper = new WebsocketHelper("ws://localhost:8080");
export const emit = (type, payload) =>
    websocketHelper.socketInstance.emit(type, payload);
