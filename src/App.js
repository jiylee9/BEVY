import React from 'react';

import Home from './Home'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
      <Router>   
      <div className="home-default">  

      <Home/>
          
]    </div>
    </Router> 
  
  );
}

export default App;
