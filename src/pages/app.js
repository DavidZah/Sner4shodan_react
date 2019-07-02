import React from 'react'; 
import Menu from './home'
import Services from './Services/Services'
import Hosts from './Hosts/Hosts'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function AppRouter(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <span>
                            <Link to="/"> Home </Link>
                        </span>
                        <span>
                            <Link to ="/hosts/"> Hosts </Link>
                        </span>
                        <span>
                            <Link to="/services/"> Services </Link>
                        </span>
                    </ul>
                </nav>
                <Route path="/services/" exact component = {Services}/>
                <Route path="/hosts/" exact component = {Hosts}/>
            </div>
        </Router>
    );
}

export default AppRouter; 
