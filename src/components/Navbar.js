import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import './Navbar.scss';

export default class Navbar extends Component {
    render() {
        return (
            <div className={"navbar-container"}>
                <div className={"navbar-item"}><NavLink to="/">Home</NavLink></div>
                <div className={"navbar-item"}><NavLink to="/stuff">Stuff</NavLink></div>
                <div className={"navbar-item"}><NavLink to="/contact">Contact</NavLink></div>
            </div>
        )
    }
}