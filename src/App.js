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

import { addNewService, deleteService } from "./features/servicesSlice";
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // const thunkSpecialist = addNewService({
  //   type: "asdf",
  //   description: "fdsa",
  //   price: 123,
  //   specialistId: 5,
  //   customerId: 6,
  // });

  // dispatch(thunkSpecialist);

  // const thunkItemDelete = deleteService(666);
  // dispatch(thunkItemDelete);

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
