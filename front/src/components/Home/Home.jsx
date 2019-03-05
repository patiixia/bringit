import React, { Component } from 'react'
import "./home.scss";

//Rutas a páginas
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default class Home extends Component {
  render() {
    return (
      <div>
         <Navbar conditions={'home'}/>

        <div className="grid-flex">
          <div id="image" className="col col-image">
        </div>

        <div className="col col-text">
          <div className="Aligner-item">
            <h1>bringit</h1>
            <p>bring.it connects shoppers and travelers who help each other access the world.</p>
          </div>
        </div>
      </div>

      <div className="howdoesitwork">

      <div className="home-col">
        <img className="home-img" src="https://image.flaticon.com/icons/svg/751/751463.svg" alt="lupa"/>
        <p className="howdoesitwork-p">Publish your order or trip</p>
        </div> 

        <div className="home-col">
        <img className="home-img" src="https://image.flaticon.com/icons/svg/751/751463.svg" alt="lupa"/>
        <p className="howdoesitwork-p">Connect with people all over the world</p>
        </div> 

        <div className="home-col">
        <img className="home-img" src="https://image.flaticon.com/icons/svg/751/751463.svg" alt="lupa"/>
        <p className="howdoesitwork-p">Receive the product you are looking for</p>
        </div> 

      </div>

        <Footer />
      </div>
    )
  }
}


