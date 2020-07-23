import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import ProductFormContainer from "./ProductFormContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products/new" component={ProductFormContainer} />
        <Route path="/products/:id" component={ProductShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App