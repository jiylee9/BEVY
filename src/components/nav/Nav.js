import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {    

    return (
    
       <div className="nav-bar">

          <h3>BEVY</h3>

          <ul className="nav-bar-list">
              <Link to='/matches'>
                <li>Matches</li>
              </Link>
              <Link to='/discover'>
                <li>Discover</li>
              </Link>
              <Link to='/profile'>
                <li>Profile</li>
              </Link>
          </ul>

        </div>

      );
}

export default Nav;