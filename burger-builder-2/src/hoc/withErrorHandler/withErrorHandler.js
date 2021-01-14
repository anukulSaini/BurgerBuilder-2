import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHAndler = (WrappedComponent) => {
    return (props) => {
        return (
            <Aux><WrappedComponent {...props}/></Aux>
        );
    }
}

export default withErrorHAndler;