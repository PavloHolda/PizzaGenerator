import React from 'react';
import './CurrentPizzaItem.scss';

const CurrentPizzaItem = props => {
    return(
        <div className={'current-pizza-item' + ' ' + props.pizzaItem.name}></div>
    )
}

export default CurrentPizzaItem;