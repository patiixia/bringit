import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

import "./confirmation.scss";

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

                <div className="confirmation-order-form">

                <div className="confirmation-form-content">
                
                <img id="confirmation-img" src="https://image.flaticon.com/icons/svg/1004/1004765.svg" alt="confirmation"/>

                <h2 id="confirmation-order-header">Confirm your Details</h2>
                <p id="confirmation-p">Confirm if the following details have been correctly entered</p>
                
                <div className="details-confirmation">
                
                <ul>
                        <li className="confirmation-li">Product Link: {productLink}</li>
                        <li className="confirmation-li">Product Name: {productName}</li>
                        <li className="confirmation-li">Product Details: {productDetails}</li>
                <hr className="hr-confirmation"/>
                        <li className="confirmation-li"> Delivery From: {deliveryFrom}</li>
                        <li className="confirmation-li"> Delivery To: {deliveryTo}</li>
                        <li className="confirmation-li"> Order Date: {deliveryDate}</li>
                </ul>

                </div>

                <div className="details-confirmation-total">
                
                <ul>
                      
                        <li className="confirmation-li"> Price: {price}$</li>
                        {/* <li className="confirmation-li"> Quantity: {quantity}</li> */}
                        <li className="confirmation-li"> Total: {price*quantity}$</li>
    
                </ul>

                </div>

                <input className="confirmation-button" type="submit" value="Back" onClick={this.back} />
                <form onSubmit={this.props.confirmation}>
                <input className="confirmation-button" type="submit" value="Publish"/>
                {/* <input id="order-button" type="submit" value="Confirm" onClick={this.saveAndContinue} /> */}
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Confirmation;
