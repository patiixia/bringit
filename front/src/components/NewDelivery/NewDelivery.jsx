import React, { Component } from 'react'
import TravelService from '../service/travel-service';
import { Redirect } from 'react-router-dom';

import "./newDelivery.scss";

import Navbar from '../Navbar/Navbar';

export default class NewDelivery extends Component {

    constructor(props){
        super(props);
        this.state = { travelFrom: '', travelTo: '', travelDate: '', hasBeenSent: false};
        this.service = new TravelService();
      }

    handleFormSubmit = (event) => {
        event.preventDefault();
       
        this.service.sendTravels( this.state)
        .then( travel => {
            this.setState({ 
            travelFrom: "", 
            travelTo: "",
            travelDate: "",
            hasBeenSent: true,
          })
        })
        .catch( error => console.log("error") )
    }

      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});

      }
// redirección a login si no estás logueado, cómo lo aplico?
  render() {
    if (this.state.hasBeenSent === false){
        return (
      <div>

        <Navbar conditions={'newDelivery'}/>

      <div className="newDelivery-form">

        <form onSubmit={this.handleFormSubmit}>

        <img id="journey" src="https://image.flaticon.com/icons/svg/1442/1442950.svg" alt="journey"/>

          <h2>Add new trip</h2>

          <p id="addnewtrip-text">With a trip added, you can make multipe offers and make more money.</p>

          <div className="form-content">

            <input className="order-input" type="text" name="travelFrom" placeholder="Traveling from" value={this.state.travelFrom} onChange={ e => this.handleChange(e)}/>            
    
            <input className="order-input" type="text" name="travelTo" placeholder="Traveling to" value={this.state.travelTo} onChange={ e => this.handleChange(e)}/>

            <input className="order-input" type="date" name="travelDate" placeholder="Travel Date" value={this.state.travelDate} onChange={ e => this.handleChange(e)}/>

            <input id="order-button" type="submit" value="Add" />

            </div>

          </form>
          </div>

      </div>
    )
  } else {
      
    return <Redirect to="/travels" />
  }
}
}
