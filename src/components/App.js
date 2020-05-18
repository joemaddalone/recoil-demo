import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Header from "./Header";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Router basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
};

export default App;
