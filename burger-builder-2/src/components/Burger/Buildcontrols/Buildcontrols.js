import React from 'react';

import classes from './Buildcontrols.css';
import BuildControl from './BuildControl/BuildControl';


const Controls =[
   {label:'Salad',type:'salad'},
   {label:'Meat',type:'meat'},
   {label:'Cheese',type:'cheese'},
   {label:'Bacon',type:'bacon'}
];

const buildcontrols = (props) => (
   <div className={classes.BuildControls}>
       {Controls.map(ctrl =>(
          <BuildControl 
          key={ctrl.label} 
          label ={ctrl.label}
          added ={() => props.ingredientAdded(ctrl.type)}
          remove ={() => props.ingredientremoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          ></BuildControl>
       ))}
   </div>
);

export default buildcontrols;