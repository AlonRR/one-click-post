import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/profilePage/Profile'
import Navbar from './components/navbar/Navbar'
import StartPage from './components/startPage/StartPage'
import MainPostPage from './components/mainPost/MainPostPage';
import DevTools from 'mobx-react-devtools'

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <DevTools/>
          <Navbar />
          <Route path="/profile" exact render={({ match }) => <Profile />} />
          <Route path="/" exact render={({ match }) => <StartPage loginPage={false}/>} />
          <Route path="/mainPost" exact render= {({ match }) => <MainPostPage />} />
        </div>
      </Router>
    );
  }
}

export default App;

