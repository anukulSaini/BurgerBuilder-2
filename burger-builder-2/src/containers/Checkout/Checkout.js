import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state ={
        ingredients :{
            salad:1,
            meat:1,
            cheese:1
        }
    }
    chekouContinuedHandler= () =>{
       this.props.history.goBack();
    }


    checkoutCancelledHandler= () =>{
       this.props.history.replace('/checkout/contact-data');
    }



    render() { 
        return ( 
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancelled={}
                chekouContinued={}/>
            </div>
         );
    }
}
 
export default Checkout;