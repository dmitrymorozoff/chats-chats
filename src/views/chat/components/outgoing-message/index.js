// @flow
import React, { PureComponent } from "react";
import "./style.scss";

export class OutgoingMessage extends PureComponent {
    render() {
        return (
            <div className="message message--outgoing">
                <div className="message__content">
                    These guys who cannot resist the urge to put music on their
                    outgoing message.
                </div>{" "}
                <div className="message__date">11:00</div>
            </div>
        );
    }
}
