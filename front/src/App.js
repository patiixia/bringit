import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';


import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';



class App extends Component {
  
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>
  
          </Switch>
        </div>
      );
    } else {
      
    return (
      <div className="App">
      <Navbar userInSession={this.state.loggedInUser} />

        <Switch>
        <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
        <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
        </Switch>
      </div>
    );
  }
}
}
export default App;
