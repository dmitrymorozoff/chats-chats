// @flow
import React, { Component } from "react";
import "./style.scss";

export class Avatar extends Component {
    render() {
        return (
            <div className="avatar-wrapper">
                <img
                    className="avatar"
                    src="http://romatop.ru/wa-data/public/site/themes/landingpageromotop/img/userpic5.jpg"
                    alt="userpic"
                />
            </div>
        );
    }
}
