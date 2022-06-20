import logo from './logo.svg';
import './App.css';
import React from 'react';
import App from './App';
import Form from './Form';
import {NavLink,Switch,Router,Route,Routes} from "react-router-dom";


class Menu extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <li><NavLink to="/App">Home</NavLink></li>
                            <li><NavLink to="/Form">Contact Form</NavLink></li>
                        </ul>
                    </nav>

                    <Route path='/App'Component={App}></Route>
                    <Route path='/Form' Component={Form}></Route>
                </div>
                </Router>
            
        );
    }
}

export default Menu;
