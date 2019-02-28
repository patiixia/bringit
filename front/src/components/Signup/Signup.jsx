import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', name: '', lastName: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const lastName = this.state.lastName;
  
    this.service.signup(email, password, name, lastName)
    .then( response => {
        this.setState({
            email: "", 
            password: "",
            name: "",
            lastName: ""
        });
    this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
    <div>
      <form onSubmit={this.handleFormSubmit}>

        <label>Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
        
        <label>Password:</label>
        <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>
        
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>

        <label>Last Name:</label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={ e => this.handleChange(e)}/>

        <input type="submit" value="Signup" />
      </form>

      <p>Already have an account? 
          <Link to={"/login"}> Login</Link>
      </p>

    </div>
    )
  }
}

export default Signup;