import React, { Component } from 'react'
import OrderService from '../service/order-service';

import { Link } from 'react-router-dom';

import "./orders.scss";

import Navbar from '../Navbar/Navbar';


export default class Orders extends Component {

  constructor(props){
    super(props);
    this.state = { orders: []};
    this.service = new OrderService();
  }

  componentDidMount(){
    this.service.getOrders()
    .then(order => {
      this.setState({...this.state,
        orders: order
      })
      this.props.getOrders(order) //getUser
    }).catch(err => {
      console.log(err)
      } )
  }

  render() {
    return (
      <div>
        <Navbar conditions={'orders'}/>

        <div className="myOrders-header">
        <h2>Orders</h2>
        <Link id="myOrders-button" to={"/orders/new"}> New Order</Link>
        
        </div>


        <div className="myOrders">

        <div className="orders-container">

          {this.state.orders.map(order => {
            return(
              <div className="allMyOrders">
              <img className="product-image" src={order.productImage} alt=""/>  
                         
              <div className="product-text">
              <h2>{order.productName}</h2>
              <h3><span>Delivery From </span>{order.deliveryFrom}</h3>
              <h3><span>Delivery To </span>{order.deliveryTo}</h3>
              <p id="delivery-date">Delivery Date: {order.deliveryDate}</p>
              </div>
              <input id="orderDelete-button" type="submit" value="Cancel Order" />

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
