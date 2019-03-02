import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import { Link, Redirect } from 'react-router-dom';

import "./signup.scss";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', name: '', lastName: '', loggedIn: false};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const lastName = this.state.lastName;
  
    this.service.signup(email, password, name, lastName)
    .then( newUser => {
        this.setState({
            email: "", 
            password: "",
            name: "",
            lastName: "",
            loggedIn: true
        });
    this.props.getUser(newUser)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return !this.state.loggedIn ? (
    <div>

      <Navbar conditions={'signup'}/>
      <hr/>
      <div className="signup-form">

      <form id="signupform" onSubmit={this.handleFormSubmit}>

      <h2 id="signup-header">Sign Up</h2>
      <div className="form-content">
        
        <input className="signup-input" type="text" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
        
      
        <input className="signup-input" type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)}/>
        
      
        <input className="signup-input" type="text" name="name" placeholder="Name" value={this.state.name} onChange={ e => this.handleChange(e)}/>

        
        <input className="signup-input" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={ e => this.handleChange(e)}/>

        <input id="signup-button" type="submit" value="Sign up" />

        <p id="login-link">Already have an account? 
          <Link id="login-linked" to={"/login"}> Log in</Link>
      </p>
      </div>
      </form>

      </div>
      <hr/>
      <Footer />


    </div>

    ): <Redirect to="/" />
    
    
  }
}
// if(!loggedIn) {
// <formulario>
//}else {
// redireccion a home
//}

// !loggedIn ? formulario : redireccion a home
export default Signup;