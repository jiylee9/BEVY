import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./Profile.css"

function Profile() {
    return (
      <div className="container">
        
       <div className="vertical-center">

          <h2 className="profile-name">Katie Nguyen</h2>

          <h3 className="profile-cm">University of Illinois at Urbana Champaign</h3>

          <h3 className="profile-cm">Chemical Engineering</h3>

          </div>

      </div>
    );
  }

  export default Profile;