import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import LogIn from './components/LogIn';
import Register from './components/Register';
import Congrats from './components/Congrats';
import User from './components/User';

import fire from './config/Firebase';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({user});
        } else {  
          this.setState({user: null});
        }
    });
  }
  
  render(){
    return (
      <Router>
        <div className="App">
          {this.state.user ? (<Redirect to="/user"/>) : (<Redirect to="/"/>)}

          <Switch>
            <Route path="/" exact component={LogIn}/>
            <Route path="/user" exact component={User}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/congrats" exact component={Congrats}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
