import React from 'react';

import classes from './Burger.css';
import Burgeringredient from './Burgeringredient/Burgeringredient';

const burger = (props) =>{
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        return[...Array(props.ingredients[igKey])].map((_,i)=>{
            return<Burgeringredient key ={igKey + i} type={igKey} />
        });
    });
    ;
    return(
        <div className={classes.Burger}>
            <Burgeringredient type="bread-top"/>
            {transformedIngredients}
            <Burgeringredient type="bread-bottom"/>
        </div>
    );
};

export default burger;