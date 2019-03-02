import React, { Component } from 'react';
import TravelService from '../service/travel-service';

import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';


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
        <Link to={"/trips/new"}> New Trip</Link>
        
        <div>

          {this.state.travels.map(travel => {
            return(
              <div>
              <h2>Travel From: {travel.travelFrom}</h2>
              <h2>Travel To: {travel.travelTo}</h2>
              </div>
            )
          } )
        }
        </div>

      </div>
    )
  }
}
