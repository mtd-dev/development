import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

import AddCars from './cars/components/AddCar';
import About from './shared/pages/About';
import Login from './users/components/Login';
import Profile from './users/components/Profile';
import Profiling from './users/components/Profiling';

import MainNavigation from './shared/UIElements/Naivgation/MainNavigation';

function App() {
  return (
    <React.Fragment>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/profiling">
              <Profiling />
            </Route>
            <Route exact path="/addcar">
              <AddCars/>
            </Route>
            <Route exact path="/">
              <About/>
            </Route>
            <Redirect to="/"/>
          </Switch>
        </main> 
      </Router>
    </React.Fragment>
  );
};

export default App;
