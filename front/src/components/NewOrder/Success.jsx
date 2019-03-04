import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Success extends Component{
    render(){
        return(
            <div>
                <Navbar conditions={'Order'}/>
                <h1 className="ui centered">Correctly saved</h1>
            </div>
        )
    }
}

export default Success;