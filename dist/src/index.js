import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
var lcard = (React.createElement(React.Fragment, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))));
ReactDOM.render(lcard, document.getElementById("app"));
