import React, { Component } from "react";
import TravelOrderService from "../service/travel-order-service";

import Navbar from "../Navbar/Navbar";

import "./tripsorders.scss";

export default class TripOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { travels: [], orders: [] };
    this.travelOrderService = new TravelOrderService();
    this.tripsOrdersRelated();
  }

  tripsOrdersRelated = () => {
    //console.log(id)
    this.travelOrderService
      .getAllOrdersfromTravels(this.props.location.state.id)
      .then(tripsOrders => {
        console.log(tripsOrders)
        this.setState({ ...this.state, tripsOrders: tripsOrders });
       
      })
      
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.props);
    
    // this.props.location?console.log(this.props):console.log("hola")
    return (
      <div>
        <Navbar conditions={"trips"} />
        <div>
          {this.state.tripsOrders ? (

            <div>
              <div className="trip-header">
              <p className="p-trip-header">{this.state.tripsOrders.infoTravel[0].travelFrom} <span role="img" aria-label="airplane">🛩</span>&nbsp;
  {this.state.tripsOrders.infoTravel[0].travelTo}</p>
              <p className="date-trip-header"><span role="img" aria-label="calendar">📅</span>&nbsp;{this.state.tripsOrders.infoTravel[0].travelDate}</p>
              </div>
              <div>

              <div className="myOrders">

                {this.state.tripsOrders.infoOrders.map(allorders => {
                  return (

                  <div className="travel-all-orders-container">
                        <img className="product-image" src={allorders.productImage} alt=""/>  
          
                        <div className="travel-all-orders-product-text">
                        <h2>{allorders.userId[0].name}<span> requested</span></h2>
                        <h3 className="trips-orders-productname"><span>Product </span>{allorders.productName}</h3>
                        <h3 className="trips-orders-deliveryto"><span>Delivery To </span>{allorders.deliveryTo}</h3>
                        <h3 className="trips-orders-productlink"><span>Where to buy </span>{allorders.productLink}</h3>
                        <p id="delivery-date">Price: {allorders.price}$</p>
                        </div>

                        <form method="post" action="mailto:youremail@youremail.com" >
                        {/* <form method="post" action="mailto:{allorders.userId[0].email}" > */}
                        {/* {allorders.userId[0].email}  */}
                        <input id="orderDelete-button" type="submit" value="Make offer" />
                        </form>

                  </div>          
                  );
                })}
              </div>
              </div>
            </div>
          ) : ( <div>Hola</div>
          )}
        </div>
        </div>
    );
  }
}
