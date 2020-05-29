import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.scss';
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className={"background"}>
                    <div className={"main"}>
                        <h1 className={"title"}>jimzers' Place</h1>
                        <Navbar/>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/stuff" component={About}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;