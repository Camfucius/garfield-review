import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import ProductFormContainer from "./ProductFormContainer"
import ProductShowContainer from './ProductShowContainer'
import ProductsContainer from './ProductsContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/products/new" component={ProductFormContainer} />
        <Route exact path="/products/:id" component={ProductShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
