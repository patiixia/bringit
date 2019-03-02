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

        <div class="col col-text">
          <div class="Aligner-item">
            <h1>bringit</h1>
            <p>bring.it connects shoppers and travelers who help each other access the world.</p>
          </div>
        </div>
      </div>

      {/* <div className="howdoesitwork">
        <p id="howdoesitwork-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, ex porro quasi at iure commodi dicta maiores aperiam nobis! Suscipit perspiciatis aliquam voluptas a, culpa veniam sequi quas delectus.</p>
      </div> */}

        <Footer />
      </div>
    )
  }
}


