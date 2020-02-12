import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Products, Comparison, Error } from './pages';

const routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/comparison" component={Comparison} />
            <Route component={Error} />
        </Switch>
    </Router>
);
export default routes;
