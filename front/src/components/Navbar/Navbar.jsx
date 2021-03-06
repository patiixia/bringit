import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";
import dom from "./manipulation"

import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  toggle = () => {
    dom()
  }



  render() {
    return (
      <div>

        <nav className="nav-style">

          <div className="container-left"><Link to="/"><img id="logo-bringit" src="bringit.png" alt="bringit" /></Link></div>

          <div className="container-right">
              <li className={this.props.conditions === "home" || this.props.conditions === "signup" ? "mostrar" : "ocultar"}><Link to="/login">Log in</Link></li>
              <li className={this.props.conditions === "home" || this.props.conditions === "login"  ? "mostrar" : "ocultar"}><Link to="/signup">Sign up</Link></li>
              {/* <Link to="/messages"><img id="messages" className={this.props.conditions === "home" ? "ocultar" : "mostrar"} src="https://image.flaticon.com/icons/svg/131/131155.svg" alt="messages"/></Link> */}
              <div onClick={() => this.toggle()}><img id="profilephoto" className={this.props.conditions === "home" || this.props.conditions === "signup" || this.props.conditions === "login" ? "ocultar" : "mostrar"} src="https://image.flaticon.com/icons/svg/149/149995.svg" alt="profile"/></div>
            {/* <li className={this.props.conditions==="trips" ? "mostrar": "ocultar" }><Link to='/'>Log out</Link></li> */}
          </div>
        </nav>

        <div className="profile-menu-container">
          <li className="p-menu"><Link to="/profile">Profile</Link></li>
          <li className="p-menu"><Link to="/orders">Orders</Link></li>
          <li className="p-menu"><Link to="/trips">Trips</Link></li>
          <li className="p-menu"><Link to="/" onClick={() => this.logoutUser()}>Log out</Link></li>
        </div>

      </div>
    );
  }
}

export default Navbar;
