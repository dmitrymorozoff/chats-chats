import React from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "./services/redux/root/";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"),
);
