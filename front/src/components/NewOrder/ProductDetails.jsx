import React, { Component } from 'react';
// import { Form, Button } from 'semantic-ui-react';
// import { throws } from 'assert';

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


        <form color='blue' >
            <h1 className="ui centered">Product Details</h1>

            
                <input placeholder='Product link'
                onChange={this.props.handleChange('productLink')}
                defaultValue={values.productLink}
                />
            
            
                <input placeholder='Product Image'
                onChange={this.props.handleChange('productImage')}
                defaultValue={values.productImage}/>
            
            
                <input placeholder='Product Name'
                onChange={this.props.handleChange('productName')}
                defaultValue={values.productName}/>
            

                <input placeholder='Product Details'
                onChange={this.props.handleChange('productDetails')}
                defaultValue={values.productDetails}/>
        
            
                <input placeholder='Price'
                onChange={this.props.handleChange('price')}
                defaultValue={values.price}/>
            
            
                <input placeholder='Quantity'
                onChange={this.props.handleChange('quantity')}
                defaultValue={values.quantity}/>
            
            <input type="submit" value="Save And Continue" onClick={this.saveAndContinue}/>
        </form>

        </div>
        )
    }
}

export default ProductDetails;