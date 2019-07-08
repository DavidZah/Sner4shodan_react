import React from 'react';
import { Home } from './Components/Home';
import Services from './Components/Service';
import {Hosts} from './Components/Hosts';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <>
                <nav>
                    <ul>
                        <span>
                            <Link to="/"> Home </Link>
                        </span>
                        <span>
                            <Link to="/hosts/"> Hosts </Link>
                        </span>
                        <span>
                            <Link to="/services/"> Services </Link>
                        </span>
                    </ul>
                </nav>
                <Route path="/services/" exact component={Services} />
                <Route path="/hosts/" exact component={Hosts} />
                <Route path="/" exact component={Home} />
            </>
        </Router>
    );
}

export default AppRouter;
