import * as React from "react";

export class IncomingMessage extends React.PureComponent {
    public render() {
        return (
            <div className="message message--incoming">
                <div className="message__content">
                    An encrypted public key is published to the sending server's
                    DNS records and then each outgoing message is signed by the
                    server using the corresponding encrypted private key.
                </div>
                <div className="message__date">11:00</div>
            </div>
        );
    }
}
