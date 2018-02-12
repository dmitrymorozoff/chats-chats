// @flow
import React, { Component } from "react";
import { Avatar } from "../avatar";
import "./style.scss";

export class AccountItem extends Component {
    render() {
        return (
            <div className="account-item" tabindex="0">
                <div className="account-item-left">
                    <Avatar />
                </div>
                <div className="account-item-right">
                    <div className="account-item-block">
                        <div className="account-item-block__name">
                            Ivana Humpalton
                        </div>
                        <div className="account-item-block__time">08:00</div>
                    </div>
                    <div className="account-item-right__title">
                        How we keep in Russia
                    </div>
                    <div className="account-item-right__short-message">
                        Which are small picture letters/icons that can be added
                        to messages on the iPhone, Android or Windows
                        SmartPhones. Please send{" "}
                    </div>
                </div>
            </div>
        );
    }
}
