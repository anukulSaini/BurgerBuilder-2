import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import Classes from './CheckoutSummary.css';

const chekoutSummary = (props) => {
 
        return ( 
            <div className={Classes.CheckoutSummary}>
                <h1>We hope it tastes well!!!</h1>
                <div style ={{width:'100%', height: '300px' , margin :'auto'}}>
                     <Burger  ingredients ={props.ingredients}/>
                </div>
                   <Button 
                    clicked={props.chekoutCancelled}
                    btnType="Danger">
                    CANCEL
                    </Button>
                <Button 
               clicked={props.chekouContinued}
               btnType="Success">
               CONTINUE
               </Button>
            </div>
         );
    
}
 
export default chekoutSummary;