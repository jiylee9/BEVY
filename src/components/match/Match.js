import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from '../nav/Nav'
import "./Match.css"
import Finder from '../../components/finder/Finder'


function Match() {
    return (
      <div>
        <Nav/>
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
          <div className="container">
        
        <div className="discover">

          <img className="discover-image" src="https://i.imgur.com/etzuKya.png" alt="jyuna"></img>

          <div className="fav-btn">
              <img src="https://i.imgur.com/rp91ko7.png"></img>
            </div>

          <div className="discover-bio">
            <h2 className="discover-name">Ji Yoon Lee 19</h2>

            <h3 className="discover-cm">University of Illinois at Urbana Champaign</h3>

            <h3 className="discover-cm">Computer Engineering</h3>

          </div>
          <div className="discover-extended-bio">
          
          <ul>
            <li>Bio: A fun outgoing person!</li>
            <li>Interests: Knitting, skin care, webtoons</li>
            <li>Graduation year: 2024</li>
          </ul>

          </div>

        </div>
        <div className="arrow">
          <img src="https://i.imgur.com/fkBZtK7.png" alt="kati wen"></img>
        </div>
        <div className="arrow" title="right">
          <img src="https://i.imgur.com/fkBZtK7.png" alt="kati wen"></img>
        </div>

      </div>
          </div>

      </div>
      </div>

    );
  }

  export default Match;