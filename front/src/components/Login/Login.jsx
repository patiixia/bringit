import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import { Link, Redirect } from 'react-router-dom';

import "./login.scss";


//Rutas a páginas
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



class Login extends Component {
    constructor(props){
      super(props);
      this.state = { email: '', password: '', loggedIn: false };
      this.service = new AuthService();
    }
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      const email = this.state.email;
      const password = this.state.password;

      this.service.login(email, password)
      .then( user => {
          this.setState({ 
          email: "", 
          password: "",
          loggedIn: true
        });
          this.props.getUser(user)
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
          
          <Navbar conditions={'login'}/>  

        <div className="login-form">
          <form onSubmit={this.handleFormSubmit}>

          <h2 id="login-header">Log In</h2>

          <div className="form-content">

     
            <input className="login-input" type="text" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
            
    
            <input className="login-input" type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)}/>

            <input id="login-button" type="submit" value="Log in" />
            </div>

            <p id="signup-link">Don't have account? 
              <Link id="signup-linked" to={"/signup"}> Sign up</Link>
          </p>
          </form>
          </div>
          <Footer />
        </div>
      ): <Redirect to="/profile" />
    } 
  }
  
  export default Login;