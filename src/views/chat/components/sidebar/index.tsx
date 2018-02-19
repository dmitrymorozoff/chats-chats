import * as React from "react";
import { AccountItem } from "../../../../components/account-item/";

export class Siderbar extends React.Component {
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
