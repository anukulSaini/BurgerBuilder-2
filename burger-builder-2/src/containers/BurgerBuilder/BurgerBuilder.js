import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() { 
        return ( <Aux>
            <Burger ingredients = {this.state.ingredients}/>
          <Buildcontrols/>
        </Aux> 
        );
    }
}
 
export default BurgerBuilder;