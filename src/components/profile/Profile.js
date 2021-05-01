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
        <img className="profile-image" src="https://dummyimage.com/400x400/cc78cc/0011ff" alt="Italian Trulli"></img>
        
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