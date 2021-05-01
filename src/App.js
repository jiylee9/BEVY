import React from 'react';

import Nav from './components/nav/Nav'
import Finder from './components/finder/Finder'
import Match from './components/match/Match'
import Profile from './components/profile/Profile'
import Home from './Home'

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>   
      <div className="home-default">  

        <Home/>


      </div>
    </Router> 
  
  );
}

export default App;
