import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SigIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {



  

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/SignUp" component={SignUp} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
