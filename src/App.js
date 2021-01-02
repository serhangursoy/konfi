import logo from './resources/images/logo.png';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react'
import ImageCrypt from "./pages/ImageCrypt";
import ImageDecrypt from "./pages/ImageDecrypt";
import About from "./pages/About";

function App() {
  return (
    <Router>

      <nav className="navbar">
        <ul className="nav">
          <img alt="logo" src={logo} className="logo" /><h1 className="BrandName">Konfi</h1>
          <li>
            <Link to="/">Hide</Link>
          </li>
          <li>
            <Link to="/reveal">Reveal</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/reveal">
          <ImageDecrypt />
        </Route>
        <Route path="/">
          <ImageCrypt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
