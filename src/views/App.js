import React, { Component } from "react";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            response: "",
        };
    }

    componentDidMount() {
        fetch("/api/hello")
            .then(response => response.json())
            .then(body => {
                this.setState({ response: body.data });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <div className="content">{this.state.response}</div>
            </div>
        );
    }
}
