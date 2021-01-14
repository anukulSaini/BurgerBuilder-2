
import React, {Component} from 'react';
import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
     state ={
         showSideDrawer:true
     }


     sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
     }

     drawerToggleClicked = () =>{
         this.setState((prevState) => {
         return {showSideDrawer: !prevState.showSideDrawer}
        })
     }

    render (){
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.drawerToggleClicked} />
            <SideDrawer open ={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler}/>
           <main className={classes.Content}>
               {this.props.children}
           </main>
           </Aux>
        )
    }
} 

export default Layout;