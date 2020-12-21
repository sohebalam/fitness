import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Dashboard from "./pages/Dashboard"
import EventsPage from "./pages/Dashboard/EventsPage"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/eventspage" component={EventsPage} />
      </Switch>
    </BrowserRouter>
  )
}
