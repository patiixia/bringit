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


      {/* Landing */}
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


       {/* How does it works */}
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

      {/* How does it work? Travel and order  */}
      <div className="grid-flex-howdoes">
         
      <div className="col-howdoes col-text-howdoes">
          <div className="Aligner-item">
            <h2>Are you traveler?</h2>
            <p>Are you looking for a product that is not available in your country?</p>
                  
            </div>
        </div>

<hr id="vertical-hr"/>

        <div className="col-howdoes col-text-howdoes">
          <div className="Aligner-item-howdoes">
            <h2>Are you orderer?</h2>
            <p>Are you looking for a product that is not available in your country?</p>
          </div>
        </div>
      </div>



        <Footer />
      </div>
    )
  }
}


