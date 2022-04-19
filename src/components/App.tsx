import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Test from "./Test";

const App = () => (
  <>
  <Routes>
      <Route path="/" element={ <Test /> } />
    </Routes>
  </>
);

export default App;
