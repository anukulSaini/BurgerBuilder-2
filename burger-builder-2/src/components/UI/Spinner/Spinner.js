import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './Spinner.css';

const spinner = () => (
    <div className={classes.Loader}>Loading...</div>
);

export default spinner;
