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
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4,
        purchasable:false
    }


    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const upgradeIngredients = {
            ...this.state.ingredients
        };
        upgradeIngredients[type]=updateCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:upgradeIngredients});
        this.updatePurchaseState(upgradeIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updateCount = oldCount - 1;
        const upgradeIngredients = {
            ...this.state.ingredients
        };
        upgradeIngredients[type]=updateCount;
        const priceDiduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDiduction;
        this.setState({totalPrice:newPrice,ingredients:upgradeIngredients});
        this.updatePurchaseState(upgradeIngredients);
    }
    
    render() { 
        const disabledInfo ={
           ...this.state.ingredients
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return ( <Aux>
            <Burger ingredients = {this.state.ingredients}/>
          <Buildcontrols
          ingredientAdded={this.addIngredientHandler}
          ingredientremoved={this.removeIngredientHandler}
          disabled ={disabledInfo}
          purchasable={this.state.purchasable}
          price ={this.state.totalPrice}
          />
        </Aux> 
        );
    }
}
 
export default BurgerBuilder;