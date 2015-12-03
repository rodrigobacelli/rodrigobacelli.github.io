import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from "../components/App"
import Home from "../components/Home"

const routes =
    <Route component={App}>
        <Route path="/" component={Home} />
    </Route>;

export default class Routes extends Component{
    render(){
        return (
            <Router history={createBrowserHistory()}>
                {routes}
            </Router>
        )
    }
}

