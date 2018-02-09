// @flow
import React, { Component } from "react";
import { AccountItem } from "../../../../components/account-item/";
import "./style.scss";

export class Siderbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
        );
    }
}
