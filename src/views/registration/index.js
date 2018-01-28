import React, { Component } from "react";
import "./style.scss";

export class Registration extends Component {
    render() {
        return (
            <div className="registration-page">
                <div className="registration-card">
                    <div className="registration-card__title">Sign UP</div>
                    <div className="registration-card__desc">Enter your email addressto create your account</div>
                    <div className="registration-form" />
                </div>
            </div>
        );
    }
}
