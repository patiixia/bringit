import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import "./footer.scss";


export default class Footer extends Component {
  render() {
    return (
      <div>

        <footer className="footer-style">
          <ul>
          <li><Link className="link" to='/'>Team</Link></li>
          <li><Link className="link" to='/'>FAQ's</Link></li>
          <li><Link className="link" to='/'>Terms and conditions</Link></li>
          </ul>

          </footer>
        


      </div>
    )
  }
}
