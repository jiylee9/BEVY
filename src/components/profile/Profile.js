import axios from "axios";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./Profile.css"

class Profile extends React.Component {

  constructor(props) {
    super(props);



  }
  
  render() {

    // const name = axios.get()

    return (
      <div className="container">
        <img className="profile-image" src="https://i.imgur.com/hzRXXd1.jpg" alt="kati wen"></img>
        
        <div className="vertical-center">
          <div className="profile-bio">
            <h2 className="profile-name">Katie Nguyen</h2>

            <h3 className="profile-cm">University of Illinois at Urbana Champaign</h3>

            <h3 className="profile-cm">Chemical Engineering</h3>
          </div>
        </div>

      </div>
    );
  }
};

  export default Profile;