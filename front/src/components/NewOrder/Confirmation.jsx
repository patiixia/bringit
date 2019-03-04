import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import { Button, List } from 'semantic-ui-react';

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
                <h1>Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <ul>
                        <li>Link: {productLink}</li>
                        <li>Product Image: {productImage}</li>
                        <li>Product Name: {productName}</li>
                        <li>Product Details: {productDetails}</li>
                        <li> Price: {price}</li>
                        <li> Quantity: {quantity}</li>
                        <li> Total: {price*quantity}</li>
                        <li> Delivery From: {deliveryFrom}</li>
                        <li> Delivery To: {deliveryTo}</li>
                        <li> Order Date: {deliveryDate}</li>
                        

                </ul>

                <input type="submit" value="Back" onClick={this.back} />
                <input type="submit" value="Confirm" onClick={this.saveAndContinue} />

            </div>
        )
    }
}

export default Confirmation;