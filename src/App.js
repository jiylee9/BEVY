import React from 'react';

import Nav from './components/nav/Nav'
import Finder from './components/finder/Finder'
import Match from './components/match/Match'
import Profile from './components/profile/Profile'
import Login from './components/login/Login'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home'

import './App.css';

function App() {
  return (
    <Router>   
      <div className="home-default">  

          <Nav />
          <Route path='/matches' component={Match} />
          <Route path='/discover' component={Finder} />      
          <Route path='/profile' component={Profile}/>


    </div>
    </Router> 
  
  );
}

export default App;
