import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';

const INGREDIENT_PRICE ={
    salad:1.5,
    cheese:0.4,
    meat:1.4,
    bacon:0.8
}

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPrice:4
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const upgradeIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type]=updateCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:upgradeIngredients});
    }


    render() { 
        return ( <Aux>
            <Burger ingredients = {this.state.ingredients}/>
          <Buildcontrols
          ingredientAdded={this.addIngredientHandler}
          />
        </Aux> 
        );
    }
}
 
export default BurgerBuilder;