import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';

class Orders extends Component {
    state = { 
        orders : [],
        loading : true
     }

    componentDidMount () {
        axios.get('/orders.json')
             .then(response=>{
            this.setState({loading:false});
        })
        .catch(error =>{
            this.setState({loading:false})
        });
     }
    render() { 
        return ( 
            <div>
                <Order/>
                <Order/>
                <Order/>
            </div>
         );
    }
}
 
export default Orders;