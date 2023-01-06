import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "../common/Home";
import Login from "../common/Login";
import Formulario from "../formulario";
import Services from "../views/services";
import About from '../views/about'

export default function AppRouter() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/home/" component={Home}></Route>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/registro" component={Formulario}></Route>
          <Route exact path="/ingresar" component={Login}></Route>
          <Route exact path="/servicios" component={Services}></Route>
          <Route exact path="/about" component={About}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </>
    </Router>
  );
}
