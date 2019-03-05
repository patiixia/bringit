import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import { Form, Button } from 'semantic-ui-react';
// import { throws } from 'assert';

import "./newOrder.scss";


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

        <form className="order-form">

            <div className="form-content">

            <img id="delivery" src="https://image.flaticon.com/icons/svg/1442/1442950.svg" alt="delivery"/>


            <h2 id="order-header">Delivery City and Date</h2>
                
                <input className="order1-input" type="text" name="deliveryFrom" placeholder='Travel From'
                onChange={this.props.handleChange('deliveryFrom')}
                defaultValue={values.travelFrom}/>
            
                
                <input className="order1-input" type="text" name="deliveryTo" placeholder='Travel To'
                onChange={this.props.handleChange('deliveryTo')}
                defaultValue={values.travelTo}
                />
         
                
                <input className="order1-input" type="date" name="deliveryDate" placeholder='Delivery Date'
                onChange={this.props.handleChange('deliveryDate')}
                defaultValue={values.deliveryDate}
                />
    

                <input id="order-button" type="submit" value="Back" onClick={this.back}/>
                <input id="order-button" type="submit" value="Save And Continue" onClick={this.saveAndContinue}/>

                </div>
        </form>

</div>
        )
    }
}

export default DeliveryCityDate;