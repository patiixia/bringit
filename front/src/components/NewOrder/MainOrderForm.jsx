import React, { Component } from 'react';
import OrderService from '../service/order-service';


import ProductDetails from './ProductDetails';
import DeliveryCityDate from './DeliveryCityDate';
import Confirmation from './Confirmation';
import Success from './Success';

export default class MainOrderForm extends Component {

    constructor (props){
        super(props);
        this.state = { step: 1,
            productLink: '',
            productImage: '',
            productName: '',
            productDetails: '',
            price: '',
            quantity: '',
            amount: '',
            deliveryFrom: '',
            deliveryTo: '',
            deliveryDate: ''};
        this.service = new OrderService();
      }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render(){
        const {step} = this.state;
        const { productLink, productImage, productName, productDetails, price, quantity, amount, deliveryFrom, deliveryTo, deliveryDate } = this.state;
        const values = { productLink, productImage, productName, productDetails, price, quantity, amount, deliveryFrom, deliveryTo, deliveryDate };
        
        switch(step) {
        case 1:
            return <ProductDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <DeliveryCityDate 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

