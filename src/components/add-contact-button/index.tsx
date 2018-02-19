import * as React from "react";
import { NewContactModal } from "../new-contact-modal/";
import "./style.scss";

type Props = {};

type State = {
    isOpen: boolean;
};

export class AddContactButton extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    onClickHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    render() {
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
