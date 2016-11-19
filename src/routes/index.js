import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from "../components/App";
import Gallery from "../components/Gallery";
import Project from "../components/Project";

const routes =
    <Route component={App}>
        <Route path="/" component={Gallery} />
        <Route path="/:slug" component={Project} />
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

