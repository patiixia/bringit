import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

import "./navbar.scss";


class Navbar extends Component {
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
       
    render(){
    //if(this.state.loggedInUser){


        //   return(
        //     <nav className="nav-style">
        //        <ul>
        //          <li>Welcome, {this.state.loggedInUser.username}</li>
        //         <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
        //          <li>
        //          <Link to='/'>
        //        <button onClick={() => this.logoutUser()}>Logout</button>
        //        </Link>                
        //        </li>
        //        </ul>
        //     </nav>
        //   )
        // } else {
        //   return (
      
        //     <nav className="nav-style">
        //       <ul>
        //         <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
        //         <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
        //       </ul>
        //     </nav>
        //   )
        // }
        return (

          

        <nav className="nav-style">

        <div className="container-left">
          
          <Link to='/'><img id="logo-bringit" src="bringit.png" alt="bringit"/></Link>
        </div>

        <div className="container-right">
          <li className={this.props.conditions==="home" || this.props.conditions==="signup"  ? "mostrar": "ocultar" }><Link to='/login'>Log in</Link></li>
          <li className={this.props.conditions==="home" || this.props.conditions==="login" ? "mostrar": "ocultar" }><Link to='/signup'>Sign up</Link></li>
          <Link to='/messages'><img id="messages" className={this.props.conditions==="profile" ? "mostrar": "ocultar" } src="https://image.flaticon.com/icons/svg/131/131155.svg" alt="messages"/></Link>
          <Link to='/messages'><img id="profilephoto" className={this.props.conditions==="profile" ? "mostrar": "ocultar" } src="https://image.flaticon.com/icons/svg/149/149995.svg" alt="profile"/></Link>
          <li className={this.props.conditions==="trips" ? "mostrar": "ocultar" }><Link to='/'>Log out</Link></li>

        </div>

        </nav>


        )
      } 
      }

export default Navbar;