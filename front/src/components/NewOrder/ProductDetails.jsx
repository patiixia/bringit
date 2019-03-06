import React, { Component } from 'react';

import "./newOrder.scss";


import Navbar from '../Navbar/Navbar';



class ProductDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }





    render(){
        const { values } = this.props
        
        
        return(

    <div>
        <Navbar conditions={'Order'}/>

        <div className="step-one"><p>1</p></div>

        <form className="order-form">

            <div className="form-content">

            <img id="package" src="https://image.flaticon.com/icons/svg/679/679720.svg" alt="package"/>


            <h2 id="order-header">Product Details</h2>

                
                <input className="order1-input" type="url" name="productLink" placeholder='Product link'
                onChange={this.props.handleChange('productLink')}
                defaultValue={values.productLink}/>
            
            
                <input className="order1-input" type="file" name="productImage" placeholder='Product Image'
                onChange={this.props.handleChange('productImage')}
                defaultValue={values.productImage}/>
            
            
                <input className="order1-input" type="text" name="productName" placeholder='Product Name'
                onChange={this.props.handleChange('productName')}
                defaultValue={values.productName}/>
            

                <input className="order1-input" type="text" name="productDetails" placeholder='Product Details'
                onChange={this.props.handleChange('productDetails')}
                defaultValue={values.productDetails}/>
        
            
                <input className="order1-input" type="text" name="price" placeholder='Price'
                onChange={this.props.handleChange('price')}
                defaultValue={values.price}/>
            
            
                <input className="order1-input" type="text" name="quantity" placeholder='Quantity'
                onChange={this.props.handleChange('quantity')}
                defaultValue={values.quantity}/>

            <input id="order-button" type="submit" value="Next" onClick={this.saveAndContinue}/>


            </div>

            <div className="form-content-left">
            <h3 id="totalprice">Product Price {values.price*values.quantity}$ </h3>
            <hr className="hr-product"/>
            <h4 id="totalprice">Traveler's reward {Math.round((values.price*values.quantity)*0.1)}$</h4>
            <hr className="hr-product"/>
            <h3 id="totalprice">Total Price {Math.round((values.price*values.quantity)+((values.price*values.quantity)*0.1))}$ </h3>
            </div>
            

        </form>
        

        </div>
        )
    }
}

export default ProductDetails;