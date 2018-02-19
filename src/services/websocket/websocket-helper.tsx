import * as io from "socket.io-client";
import { JOIN } from "../../constants/events";
import { joinHandler } from "./utils/join-handler";

export class WebsocketHelper {
    public static socket: any;
    public isConnected: boolean;
    public address: string;
    public socket: any;
    constructor(address: string) {
        this.isConnected = false;
        this.address = address;
        this.socket = undefined;
    }
    public static sendMessage(event: string, data: string | object | number) {
        WebsocketHelper.socket.emit(event, data);
    }
    public connect() {
        this.socket = io(this.address);
        this.socket.on("connect", () => {
            this.isConnected = true;
            console.info(
                `socket successfully connectes, id: ${this.socket.id}`,
            );
        });
        this.socket.on(JOIN, joinHandler);
    }
    get socketInstance() {
        return this.socket;
    }
    public recieveMessages(event: string, data: string | object | number) {
        console.log(event);
        console.log(data);
    }
}

export const websocketHelper = new WebsocketHelper("ws://localhost:8080");
export const emit = (type: any, payload: any) =>
    websocketHelper.socketInstance.emit(type, payload);
