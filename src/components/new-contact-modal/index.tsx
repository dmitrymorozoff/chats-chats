import * as React from "react";
import "./style.scss";

interface State {
    isOpen: boolean;
}

export class NewContactModal extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    public render() {
        return (
            <div className="new-contact-modal">
                <input type="text" className="input" placeholder="Username" />
                <div className="contact">
                    <div className="contact__username">Leorz</div>
                    <button className="button contact__button" />
                </div>
            </div>
        );
    }
}
