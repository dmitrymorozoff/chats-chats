import React, { Component } from "react";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            response: "",
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="App">
                <div className="content">Hello Chats Chats</div>
            </div>
        );
    }
}
