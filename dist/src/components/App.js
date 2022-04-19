import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./Test";
var App = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Test, null) })))); };
export default App;
