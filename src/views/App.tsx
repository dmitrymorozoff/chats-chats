import "normalize.scss/normalize.scss";
import * as React from "react";
import Routes from "../services/routes/";
import "../styles/global.scss";

export class App extends React.Component {
    public render() {
        return (
            <>
                <Routes />
            </>
        );
    }
}
