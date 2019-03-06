import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

import "./newOrder.scss";


class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { productLink, productImage, productName, productDetails, price, quantity, amount, deliveryFrom, deliveryTo, deliveryDate }} = this.props;

        return(
            <div>

                <Navbar conditions={'Order'}/>

                <div className="order-form">

                <div className="form-content">
                
                <img id="confirmation-img" src="https://image.flaticon.com/icons/svg/1004/1004765.svg" alt="confirmation"/>

                <h2 id="order-header">Confirm your Details</h2>
                <p id="confirmation-p">Click confirm if the following details have been correctly entered</p>
                
                <div className="details-confirmation">
                
                <ul>
                        <li className="order-li">Product Link: {productLink}</li>
                        <li className="order-li">Product Image: {productImage}</li>
                        <li className="order-li">Product Name: {productName}</li>
                        <li className="order-li">Product Details: {productDetails}</li>
                <hr className="hr-confirmation"/>
                        <li className="order-li"> Delivery From: {deliveryFrom}</li>
                        <li className="order-li"> Delivery To: {deliveryTo}</li>
                        <li className="order-li"> Order Date: {deliveryDate}</li>
                </ul>

                </div>

                <div className="details-confirmation">
                
                <ul>
                      
                        <li className="order-li"> Price: {price}</li>
                        <li className="order-li"> Quantity: {quantity}</li>
                        <li className="order-li"> Total: {price*quantity}</li>
    
                </ul>

                </div>

                <input id="order-button" type="submit" value="Back" onClick={this.back} />
                <form onSubmit={this.props.confirmation}>
                <input id="order-button" type="submit" value="Confirm"/>
                {/* <input id="order-button" type="submit" value="Confirm" onClick={this.saveAndContinue} /> */}
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Confirmation;