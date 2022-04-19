import * as React from "react";
import * as ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
//import App from "./components/App";
/*
const lcard = (
  <>
    <App />
  </>
);
*/
/*    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
*/
//ReactDOM.render(lcard, document.getElementById("app"));
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Dummy")), document.getElementById("app"));
