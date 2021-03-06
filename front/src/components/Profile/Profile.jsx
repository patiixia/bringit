import React, { Component } from 'react'
import AuthService from '../auth/auth-service';


import "./profile.scss";


//Rutas a paginas
import Navbar from '../Navbar/Navbar';
import Editprofile from './Editprofile';

export default class Profile extends Component {

  ///

  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }
  componentWillReceiveProps(nextProps) {
      this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
    }

  logoutUser = () =>{
      this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);  
      })
    }

    ///

  render() {
    return (
      <div>
        <Navbar conditions={'profile'}/>
        <div className="profile-style">
        <Editprofile conditions={'editprofile'}/>
        <h2>Hi there,</h2>
        {/* <h1>Hi there, {this.state.user.name}</h1> */}
        </div>
      </div>
    )
  }
}
