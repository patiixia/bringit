import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import { Form, Button } from 'semantic-ui-react';
// import { throws } from 'assert';

import "./deliverycitydate.scss";


class DeliveryCityDate extends Component{
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(

    <div>
            <Navbar conditions={'Order'}/>

        <div className="step-two"><p>2</p></div>


        <form className="delivery-city-date-order-form">

            <div className="delivery-city-date-form-content">

            <img id="delivery" src="https://image.flaticon.com/icons/svg/1442/1442950.svg" alt="delivery"/>


            <h2 id="delivery-city-date-header">Delivery City and Date</h2>
                
                <input className="delivery-city-date-input" type="text" name="deliveryFrom" placeholder='Delivery From'
                onChange={this.props.handleChange('deliveryFrom')}
                defaultValue={values.deliveryFrom}/>
            
                
                <input className="delivery-city-date-input" type="text" name="deliveryTo" placeholder='Delivery To'
                onChange={this.props.handleChange('deliveryTo')}
                defaultValue={values.deliveryTo}
                />
         
                
                <input className="delivery-city-date-input" type="date" name="deliveryDate" placeholder='Delivery Date'
                onChange={this.props.handleChange('deliveryDate')}
                defaultValue={values.deliveryDate}
                />
    
                <div className="delivery-buttons">
                <input className="order-button-delivery" type="submit" value="Back" onClick={this.back}/>
                <input className="order-button-delivery" type="submit" value="Next" onClick={this.saveAndContinue}/>
                </div>
                </div>
        </form>

</div>
        )
    }
}

export default DeliveryCityDate;