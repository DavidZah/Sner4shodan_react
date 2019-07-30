import React from 'react';
import { Home } from './Components/Home';
import { Services } from './Components/Service';
import { Hosts } from './Components/Hosts';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Host } from './Components/Host';

function AppRouter() {
    return (
        <Router>
            <>
                
                <nav class = "navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                <span class="navbar-brand">Sner 4 Shodan</span>
                    <ul>
                        <span class="navbar-brand">
                            <Link to="/"> Home </Link>
                        </span>
                        <span class="navbar-brand">
                            <Link to="/hosts/"> Hosts </Link>
                        </span>
                        <span class="navbar-brand">
                            <Link to="/services/"> Services </Link>
                        </span>
                    </ul>
                    </div>
                </nav>
                <Route path="/services/" exact component={Services} />
                <Route path="/hosts/" excat component={Hosts} />
                <Route path="/host/:id" component={Host} />
                <Route path="/" exact component={Home} />
            </>
        </Router>
    );
}

export default AppRouter;
