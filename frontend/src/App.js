import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';


import LandingPage from './components/LandingPage';
import ListLifts from './components/ListLifts';
import Register from './components/Register';
import Login from './components/Login';
//import CreateLift from './components/CreateLift';
//import UpdateLift from './components/UpdateLift';
//import LiftCard from './components/LiftCard';

import { UserContext } from './context/UserContext';

class App extends Component {
  static contextType = UserContext;
 
  render() {
    console.log(this.context);
    console.log(this.context[0].token)
    
    return !(this.context[0].token) ? ( 
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />

        </div>
      </Router>
    ) : (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/dashboard' component={ListLifts} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />

        </div>
      </Router>
    );
  }
}

export default App;