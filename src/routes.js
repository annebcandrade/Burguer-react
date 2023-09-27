import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min"; 
import Home from './Containers/Home'
import Users from './Containers/Users'

function Routes() {

    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/usuarios" component={Users} />
            </Switch>
        </Router>


    )
}

export default Routes;