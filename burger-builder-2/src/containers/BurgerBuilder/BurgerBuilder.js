import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-order';


const INGREDIENT_PRICE ={
    salad:1.5,
    cheese:0.5,
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
        purchasable:false,
        purchasing:false,
        Loading:false
    }


    purchaseHandler = () => {
        this.setState({purchasing:true});
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
  
    purchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () =>{
       // alert('You continue');
       this.setState({Loading:true});
       const order = {
           ingredients : this.state.ingredients,
           price : this.state.totalPrice,
           customer : {
               name: 'anukul saini',
               address : {
                   street : 'krishna market road',
                   city : 'Dehradun',
                   country : 'India'
               },
               email : 'test@test.com'
           },
           deliveryMethod : 'fastest'
       }
        axios.post('/orders.json', order)//.json for firebase
       .then(response => {
           this.setState({Loading:false, purchasing:false});
       } )
        .catch (error => {
            this.setState({Loading:false,purchasing:false});
        });
    }

    // purchaseContinueHandler = () => {
    //     // alert('You continue!');
    //     this.setState( { loading: true } );
    //     const order = {
    //         ingredients: this.state.ingredients,
    //         price: this.state.totalPrice,
    //         customer: {
    //             name: 'Max ',
    //             address: {
    //                 street: 'Teststreet 1',
    //                 zipCode: '41351',
    //                 country: 'Germany'
    //             },
    //             email: 'test@test.com'
    //         },
    //         deliveryMethod: 'fastest'
    //     }
    //     axios.post( '/orders.json', order )
    //         .then( response => {
    //             this.setState({ loading: false, purchasing: false });
    //         } )
    //         .catch( error => {
    //             this.setState({ loading: false, purchasing: false });
    //         } );
    // }


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

        let orderSummary =  <OrderSummary 
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ></OrderSummary>

        if (this.state.Loading){
           orderSummary =  <Spinner></Spinner>
        }
        return ( <Aux>
            <Modal show={this.state.purchasing}
                   modalClosed={this.purchaseCancelHandler}>
            {orderSummary}
            </Modal>
            <Burger ingredients = {this.state.ingredients}/>
           <Buildcontrols
           ingredientAdded={this.addIngredientHandler}
           ingredientremoved={this.removeIngredientHandler}
           disabled ={disabledInfo}
           purchasable={this.state.purchasable}
           price ={this.state.totalPrice}
           ordered={this.purchaseHandler}
          />
        </Aux> 
        );
    }
}
 
export default BurgerBuilder;