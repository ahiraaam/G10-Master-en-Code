import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contacto from "../pages/Contacto/Contacto";
import Noticias from "../pages/Noticias/Noticias";
import Error404 from "../pages/Error404/Error404";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/noticias" component={Noticias} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </>
  );
};
export default Routes;
