import React from 'react';

import Home from './Home'


import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <Router>
      <div className="home-default">
        <Home />
      </div>
    </Router>
=======
    <Router>   
      <div className="home-default">  

          <Nav />
          <Route path='/matches' component={Match} />
          <Route path='/discover' component={Finder} />      
          <Route path='/profile' component={Profile}/>


      </div>
    </Router> 
  
>>>>>>> Stashed changes
  );
}

export default App;
