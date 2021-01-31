import React from 'react';
import classes from './Input.css';

const input = (props) => {
     
      let inputElement = null;

      switch(props.elementType){
          case('input'):
            inputElement= <input className={classes.InputElement}
               {...props.elementConfig}>
               value={props.value}
           </input>
          break;
           case('textarea'):
             inputElement=<textarea classNam={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
           ></textarea>
          break;
          default:
              inputElement=<input className={classes.InputElement} {...props}></input>
      }


        return ( 
            <div className={classes.Input}>
                <label className={classes.Label}>{props.label}</label>
                {inputElement}
            </div>
         );
   
}
 
export default input;