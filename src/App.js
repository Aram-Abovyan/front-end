import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Admin } from "./pages/Admin";
import { Customer } from "./pages/Customer";
import { Main } from "./pages/Main";
import { Specialist } from "./pages/Specialist";

function App() {
  return (
    <>
      <Switch>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/customer">
          <Customer />
        </Route>

        <Route path="/specialist">
          <Specialist />
        </Route>

        <Route path="/">
          <Main />
        </Route>

      </Switch>
    </>
  );
}

export default App;
