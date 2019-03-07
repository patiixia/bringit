import React, { Component } from 'react';

import "./productdetails.scss";


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

        <form className="order-form-product-details">

            <div className="form-content-product-details">

            <img id="package" src="https://image.flaticon.com/icons/svg/679/679720.svg" alt="package"/>


            <h2 id="product-details-header">Product Details</h2>

                
                <input className="product-details-input" type="url" name="productLink" placeholder='Product link'
                onChange={this.props.handleChange('productLink')}
                defaultValue={values.productLink}/>
            
            
                <input className="product-details-input" type="file" name="productImage" placeholder='Product Image'
                onChange={this.props.handleChange('productImage')}
                defaultValue={values.productImage}/>
            
            
                <input className="product-details-input" type="text" name="productName" placeholder='Product Name'
                onChange={this.props.handleChange('productName')}
                defaultValue={values.productName}/>
            

                <input className="product-details-input" type="text" name="productDetails" placeholder='Product Details'
                onChange={this.props.handleChange('productDetails')}
                defaultValue={values.productDetails}/>
        
            
                <input className="product-details-input" type="text" name="price" placeholder='Price'
                onChange={this.props.handleChange('price')}
                defaultValue={values.price}/>
            
            
                <input className="product-details-input" type="text" name="quantity" placeholder='Quantity'
                onChange={this.props.handleChange('quantity')}
                defaultValue={values.quantity}/>

            <input id="product-details-button" type="submit" value="Next" onClick={this.saveAndContinue}/>


            </div>

            <div className="form-content-right-product-details">
            <h3 id="product-details-totalprice">Product Price {values.price*values.quantity}$ </h3>
            <hr className="hr-product"/>
            <h4 id="product-details-totalprice">Traveler's reward {Math.round((values.price*values.quantity)*0.1)}$</h4>
            <hr className="hr-product"/>
            <h3 id="product-details-totalprice">Total Price {Math.round((values.price*values.quantity)+((values.price*values.quantity)*0.1))}$ </h3>
            </div>
            

        </form>
        

        </div>
        )
    }
}

export default ProductDetails;