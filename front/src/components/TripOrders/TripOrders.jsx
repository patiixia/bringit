import React, { Component } from 'react';
import TravelOrderService from '../service/travel-order-service';

import Navbar from '../Navbar/Navbar';

import "./tripsorders.scss";

export default class TripOrders extends Component {


  constructor(props){
    super(props);
    this.state = { travels: [], orders: []};
    this.travelOrderService = new TravelOrderService();
  }

  tripsOrdersRelated = () =>  {
    //console.log(id)
   this.travelOrderService.getAllOrdersfromTravels(this.props.location.state.id)
   .then(tripsOrders => {
     console.log(tripsOrders)

    this.setState({...this.state,
       tripsOrders: tripsOrders
     })
     //console.log(tripsOrders)
     //this.props.getAllOrdersfromTravels(tripsOrders)
  }).catch(err => {
    console.log(err)
    } )
}




  render() {
    //this.tripsOrdersRelated();
    // console.log(this.props);
    // this.props.location?console.log(this.props):console.log("hola")
    return (
      
      <div>

          <Navbar conditions={'trips'}/>
          <div>

          {/* <h2>{this.tripsOrders.travelFrom}</h2>
          <h2>{this.tripsOrders.travelTo}</h2>
                */}

          </div>

          <div>
          

          </div>
        
      </div>
    )
  }
}
