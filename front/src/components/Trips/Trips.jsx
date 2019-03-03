import React, { Component } from 'react';
import TravelService from '../service/travel-service';

import { Link } from 'react-router-dom';

import "./trips.scss";


import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default class Trips extends Component {
   
  constructor(props){
    super(props);
    this.state = { travels: []};
    this.service = new TravelService();
  }

  componentDidMount(){
    this.service.getTravels()
    .then(travel => {
      this.setState({...this.state,
        travels: travel
      })
    }).catch(err => {
      console.log(err)
      } )
  }

  render() {
    return (
      <div>
        <Navbar conditions={'trips'}/>

        <div className="myTrips-header">
        <h2>Deliveries</h2>
        <Link id="myTrips-button" to={"/trips/new"}> New Trip</Link>
        
        </div>


        <div className="myTrips">

        <div className="trips-container">

          {this.state.travels.map(travel => {
            return(
              <div className="allMyTrips">
              <h2>{travel.travelFrom}</h2>
              <h2>{travel.travelTo}</h2>
              <p>{travel.travelDate}</p>
              <input id="tripDelete-button" type="submit" value="Cancel Trip" />
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
