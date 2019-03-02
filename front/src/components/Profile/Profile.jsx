import React, { Component } from 'react'
import AuthService from '../auth/auth-service';


import "./profile.scss";


//Rutas a paginas
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default class Profile extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = { loggedInUser: null };
  //   this.service = new AuthService();

  // }
  // componentWillReceiveProps(nextProps) {
  //     this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  //   }

  // logoutUser = () =>{
  //     this.service.logout()
  //     .then(() => {
  //       this.setState({ loggedInUser: null });
  //       this.props.getUser(null);  
  //     })
  //   }

  render() {
    return (
      <div>
        <Navbar conditions={'profile'}/>
        <div className="profile-style">
        <h1>Hi there, </h1>
        <img src="" alt=""/>
        <input id="edit-profile-button" type="submit" value="Edit profile" />
        {/* <h1>Hi there, {this.state.loggedInUser.name}</h1> */}
        </div>
        <Footer />

      </div>
    )
  }
}
