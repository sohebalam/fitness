import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
