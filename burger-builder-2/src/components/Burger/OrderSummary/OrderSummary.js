import React from 'react';

import Aux from '../../../hoc/Aux';

const ordersummary = (props) =>{
    const ingredientSummary  = Object.keys(props.ingredients)
    .map(igKey =>{
        return  ( <li>
            <span style ={{textTransform:'capitalize'}}>{igKey}</span>
        :
        {props.ingredients[igKey]}
        </li>);
    });
    return (
        <Aux>
               <h3>Your Order</h3>
               <p>A delecious burger with following ingredients</p>
               <ul>{ingredientSummary}</ul>
               <p>Continue to Checkout??</p>
        </Aux>
    )
    
};

export default ordersummary