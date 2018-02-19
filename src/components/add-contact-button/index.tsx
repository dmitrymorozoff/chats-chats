import * as React from "react";
import { NewContactModal } from "../new-contact-modal/";
import "./style.scss";

interface State {
    isOpen: boolean;
}

export class AddContactButton extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    public onClickHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    public render() {
        return (
            <div className="new-contact">
                <button
                    className="new-contact-button"
                    onClick={this.onClickHandler}
                >
                    Add contact
                </button>
                {this.state.isOpen ? <NewContactModal /> : null}
            </div>
        );
    }
}
