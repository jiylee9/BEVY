import axios from "axios";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./Profile.css"

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "", 
      Age: 18,
      University: "", 
      Major: ""

    }

  }
  
  componentDidMount() {
    axios.get('htttp://localhost:5000/:608d9c944481ce87ff1cd91f').then(
      response => {
        this.state( {
          username: response.data.username,
          Age: response.data.Age, 
          University: response.data.University, 
          Major: response.data.Major
        })
      }
    )
  }
  

  render() {

    return (
      <div className="container">
        <img className="profile-image" src="https://i.imgur.com/hzRXXd1.jpg" alt="kati wen"></img>
        
        <div className="edit-btn">
          <img src="https://i.imgur.com/x7Pez6T.png"></img>
        </div>
        <div className="profile-bio">
          <h2 className="profile-name">{this.state.username}</h2>

          <h3 className="profile-cm">{this.state.University}</h3>

          <h3 className="profile-cm">Chemical Engineering</h3>
        </div>
        

      </div>
    );
  }
};

  export default Profile;