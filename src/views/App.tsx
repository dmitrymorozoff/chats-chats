import * as React from "react";
import Routes from "../services/routes/";
import "normalize.scss/normalize.scss";
import "../styles/global.scss";

export class App extends React.Component {
    render() {
        return (
            <>
                <Routes />
            </>
        );
    }
}
