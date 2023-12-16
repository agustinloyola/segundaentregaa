import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context';
import React from 'react';

const CartWidgetComponent = () => {

    const{ itemCount } = React.useContext(CartContext);

    const iconStyles = {

        fontSize: '1.3rem',

        paddingRight: '10px'

    }

    return (

        <div>

            <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />

            <span style={{fontSize: '1.3rem'}}>{itemCount}</span>

        </div>

    )

}

 

export default CartWidgetComponent;