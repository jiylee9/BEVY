import React from 'react';

import Login from './components/login/Login'
import Home from './Home'
import Finder from './components/finder/Finder'
import nav from './components/nav/Nav'
import Match from './components/match/Match'
import Profile from './components/profile/Profile'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>   
      <div className="home-default">  

         
          <Route path="/login" Component={Login}/>
          <Route exact path="/" Component={nav, Home}/>
          <Route path="/matches" component={nav, Match} />
      <Route path="/discover" component={nav, Finder} />
      <Route path="/profile" component={nav, Profile} />
          {/* <Login/> */}
    </div>
    </Router> 
  
  );
}

export default App;
