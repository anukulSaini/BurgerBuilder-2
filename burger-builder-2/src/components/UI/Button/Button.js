import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;
