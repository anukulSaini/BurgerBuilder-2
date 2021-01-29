import React from 'react';
import Classes from './Order.css'

const  order =(props) => {
    return(
          <div className={Classes.Order}>
              <p>ingredients: salad(1)</p>
              <p>Price:<strong>10</strong></p>

          </div>
    );
}
   
 
export default order;