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
            <Link to="/konfi/">Hide</Link>
          </li>
          <li>
            <Link to="/konfi/reveal">Reveal</Link>
          </li>
          <li>
            <Link to="/konfi/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/konfi/about">
          <About />
        </Route>
        <Route path="/konfi/reveal">
          <ImageDecrypt />
        </Route>
        <Route path="/konfi/">
          <ImageCrypt />
        </Route>
        <Route path="/">
          <ImageCrypt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
