import React from 'react';

import Login from './components/login/Login'
import Home from './Home'
import Finder from './components/finder/Finder'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
