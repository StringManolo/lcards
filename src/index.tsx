import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const lcard = (
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

ReactDOM.render(lcard, document.getElementById("app"));
