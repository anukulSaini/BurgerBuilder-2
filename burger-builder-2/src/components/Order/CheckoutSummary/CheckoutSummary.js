import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const chekoutSummary = (props) => {
 
        return ( 
            <div>
                <h1>We hope it tastes well!!!</h1>
                <div style ={{width:'300px', height: '300px' , margin :'auto'}}>
                     <Burger  ingredients ={props.ingredients}/>
                </div>
                <Button/>
            </div>
         );
    
}
 
export default chekoutSummary;