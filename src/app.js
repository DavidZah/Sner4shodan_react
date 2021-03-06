import React from 'react';
import { Home } from './Components/Home';
import { Services } from './Components/Service';
import { Hosts } from './Components/Hosts';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Host } from './Components/Host';

function AppRouter() {
    return (

        <Router>
                <nav className = "navbar navbar-inverse navbar-static-top">
                <div className = "container-fluid">
                        <div className="navbar-header">
                        <p className="navbar-brand">Sner 4 Shodan</p>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                <li >
                                    <Link to="/"> Home </Link>
                                </li>
                                <li >
                                    <Link to="/hosts/"> Hosts </Link>
                                </li>
                                <li >
                                    <Link to="/services/"> Services </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <Route path="/services/" exact component={Services} />
                <Route path="/hosts/" excat component={Hosts} />
                <Route path="/host/:id" component={Host} />
                <Route path="/" exact component={Home} />
        </Router>
    );
}

export default AppRouter;
