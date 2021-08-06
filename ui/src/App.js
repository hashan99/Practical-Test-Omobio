import React from 'react';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import './App.css';

import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <>
    <Switch>

    <Route exact path="/" component={Login}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/home" component={Home}/>

    </Switch>
    </>
  );
}

export default App;
