import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Login from './Login'

@observer
class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <Link to="/mainPost">Main Post</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup" >Sign-up</Link>
        <div> <Login /> </div>
      </div>
    );
  }
}

export default Navbar