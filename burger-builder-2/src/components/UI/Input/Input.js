import React from 'react';

const input = (props) => {
     
      inputElement = null;

      switch(props.inputType){
          case('input'):
          inputElement= <input {...props}></input>
          break;
          case('textarea'):
          inputElement=<textarea{...props}></textarea>
          break;
          default:
              inputElement=<input{...props}></input>
      }


        return ( 
            <div>
                <label>{props.label}</label>
                {inputElement}
            </div>
         );
   
}
 
export default input;