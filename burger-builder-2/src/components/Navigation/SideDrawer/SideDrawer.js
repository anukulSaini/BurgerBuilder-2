import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    return (
       <Aux>
           <Backdrop show></Backdrop>
            <div className ={classes.SideDrawer}>
             <div className={classes.Logo}>
                <Logo/>
             </div>
             <nav>
                 <NavigationItems/>
             </nav>
        </div>
       </Aux>
    );
};

export default sideDrawer;