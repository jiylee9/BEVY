import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./Finder.css"
import Nav from "../nav/Nav"

class Finder extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {

    // const name = axios.get()

    return (

      <div>
        
      <Nav />
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
            <li>Bio: Hardworking and smart</li>
            <li>Interests: Video games, coding, webtoons</li>
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

    );
  }
  };

  export default Finder;