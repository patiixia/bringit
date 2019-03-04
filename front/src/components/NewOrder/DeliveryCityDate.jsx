import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import { Form, Button } from 'semantic-ui-react';
// import { throws } from 'assert';

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

        <form>
            <h1 className="ui centered">Enter Personal Details</h1>

         
                
                <input placeholder='Travel From'
                onChange={this.props.handleChange('deliveryFrom')}
                defaultValue={values.travelFrom}/>
            
                
                <input placeholder='Travel To'
                onChange={this.props.handleChange('deliveryTo')}
                defaultValue={values.travelTo}
                />
         
                
                <input placeholder='Delivery Date'
                onChange={this.props.handleChange('deliveryDate')}
                defaultValue={values.deliveryDate}
                />
    
                <input type="submit" value="Back" onClick={this.back}/>
                <input type="submit" value="Save And Continue" onClick={this.saveAndContinue}/>

        
        </form>

</div>
        )
    }
}

export default DeliveryCityDate;