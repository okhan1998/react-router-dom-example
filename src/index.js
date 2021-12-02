import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
  Outlet, 
  Link,
  NavLink
} from "react-router-dom";

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}


function App(){
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Contact />} />
        <Route path="/contact" element={<Topics />} />
      </Routes>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter><App /></HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);