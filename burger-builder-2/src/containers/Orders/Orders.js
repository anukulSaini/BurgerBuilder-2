import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';

class Orders extends Component {
    state = {  }

    componentDidMount () {
        axios.get('https://react-my-burger-335c8-default-rtdb.firebaseio.com/ingredients2.json')
             .then(response=>{
            this.setState({ingredients:response.data});
        })
        .catch(error =>{
            this.setState({error:true})
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