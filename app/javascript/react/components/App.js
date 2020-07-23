import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import ProductFormContainer from "./ProductFormContainer";
import ProductsContainer from "./ProductsContainer";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/products/new" component={ProductFormContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
