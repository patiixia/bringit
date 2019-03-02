import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';


import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Trips from './components/Trips/Trips';
import NewDelivery from './components/NewDelivery/NewDelivery';



class App extends Component {
  
  constructor(props){
    super(props)
    this.state = { loggedInUser: null, user: null };
    // this.service = new AuthService();
  }

  changeUser = (newUser) => {
    this.setState({...this.state, user: newUser})
  }


  render() {

    return (
      <div className="App">
      
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' render={() => <Login getUser={this.changeUser}/>}/>
        <Route exact path='/signup' render={() => <Signup getUser={this.changeUser}/>}/>
        <Route exact path='/profile' render={() => <Profile getUser={this.changeUser}/>}/>
        <Route exact path='/travels' render={() => <Trips/> }/>
        <Route exact path='/trips/new' render={() => <NewDelivery/> }/>

        {/* <Route exact path='/footer' render={() => <Footer getUser={this.changeUser}/>}/> */}
        </Switch>
      </div>  
    )

    //this.fetchUser()
  //   if(this.state.loggedInUser){
  //     return (
  //       <div className="App">
  //         <Navbar userInSession={this.state.loggedInUser} />
  //         <Switch>
  
  //         </Switch>
  //       </div>
  //     );
  //   } else {
      
  //   return (
  //     <div className="App">
  //     <Navbar userInSession={this.state.loggedInUser} />

  //       <Switch>
  //       <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
  //       <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
  //       </Switch>
  //     </div>
  //   );
  // }
}
}
export default App;
