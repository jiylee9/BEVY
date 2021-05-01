import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from '../nav/Nav'
import "./Match.css"
import Finder from '../../components/finder/Finder'


function Match() {
    return (
      <div className="container">
          <div className="contacts">
          <h2>Contacts</h2>
            <ul>
              <li>Ji Yoon Lee</li>
              <hr></hr>
              <li>Alison Kojima</li>
              <hr></hr>
              <li>Jess Komar</li>
              <hr></hr>
              <li>Kathryn Southon</li>
              <hr></hr>
            </ul>
          </div>
          <div className="featured">
            <Finder/>
          </div>

      </div>
    );
  }

  export default Match;