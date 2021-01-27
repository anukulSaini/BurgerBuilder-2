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
        this.props.history.replace('/checkout/contact-data');
    }


    checkoutCancelledHandler= () =>{
       this.props.history.goBack();
    }



    render() { 
        return ( 
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                chekoutCancelled={this.checkoutCancelledHandler}
                chekouContinued={this.chekouContinuedHandler}/>
            </div>
         );
    }
}
 
export default Checkout;