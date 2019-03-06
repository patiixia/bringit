import React, { Component } from 'react';
import TravelService from '../service/travel-service';
import TravelOrderService from '../service/travel-order-service'

import { Link } from 'react-router-dom';

import "./trips.scss";


import Navbar from '../Navbar/Navbar';


export default class Trips extends Component {
   
  constructor(props){
    super(props);
    this.state = { travels: []};
    this.travelService = new TravelService();
    this.travelOrderService = new TravelOrderService();
  }

  componentDidMount(){
    this.travelService.getTravels()
    .then(travel => {
      this.setState({...this.state,
        travels: travel
      })
      this.props.getTravels(travel) // getUser
    }).catch(err => {
      console.log(err)
      } )
  }


  render() {
    return (
      <div>
        <Navbar conditions={'trips'}/>

        <div className="myTrips-header">
        <h2>Trips</h2>
        <Link id="myTrips-button" to={"/trips/new"}> New Trip</Link>
        
        </div>


        <div className="myTrips">

        <div className="trips-container">

          {this.state.travels.map(travel => {
            return(
              <div className="allMyTrips">
              <p id="travel-id">{travel._id}</p>
              <h2>{travel.travelFrom}</h2>
              <h2>{travel.travelTo}</h2>
              <p id="travel-date">Travel Date: {travel.travelDate}</p>
              
              {/* <input id="relatedOrders-button" type="submit" value="Related orders" onClick={e => this.tripsOrdersRelated(travel._id)}/> */}
              
              <Link to={{ pathname: '/triporders', state: { id: travel._id} }}><input id="tripDelete-button" type="submit" value="Prueba"/></Link>
              
              <input id="tripDelete-button" type="submit" value="Cancel Trip"/>


              </div>


            )
          } )
        }
        </div>
        </div>

        

      </div>
    )
  }
}
