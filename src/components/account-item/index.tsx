import * as React from "react";
import { Avatar } from "../avatar";
import "./style.scss";

interface Props {
    username?: string | number;
    lastMessage?: string;
    _id?: string | number;
    date?: string;
    key?: string;
}

export class AccountItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    public render() {
        const { username, lastMessage, date } = this.props;
        return (
            <div className="account-item">
                <div className="account-item-left">
                    <Avatar />
                </div>
                <div className="account-item-right">
                    <div className="account-item-block">
                        <div className="account-item-block__name">
                            {username}
                        </div>
                        <div className="account-item-block__time">{date}</div>
                    </div>
                    <div className="account-item-right__short-message">
                        {lastMessage}
                    </div>
                </div>
            </div>
        );
    }
}
