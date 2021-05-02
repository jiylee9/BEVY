import axios from "axios";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./Profile.css"
import Nav from "../nav/Nav"

class Profile extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    // const name = axios.get()

    return (
      <div>
      <div className="container">
        <div className="profile">
          <img className="profile-image" src="https://i.imgur.com/hzRXXd1.jpg" alt="kati wen"></img>
          
          <div className="edit-btn">
            <img src="https://i.imgur.com/x7Pez6T.png"></img>
          </div>
          <div className="profile-bio">
            <h2 className="profile-name">Katie Nguyen 18</h2>

            <h3 className="profile-cm">University of Illinois at Urbana Champaign</h3>

            <h3 className="profile-cm">Chemical Engineering</h3>
          </div>
          
        </div>
        <div className="extended-bio">
          
          <ul>
            <li>Bio: A fun outgoing person!</li>
            <li>Interests: Knitting, skin care, webtoons</li>
            <li>Graduation year: 2024</li>
          </ul>

        </div>

      </div>
      </div>
    );
  }
};

  export default Profile;