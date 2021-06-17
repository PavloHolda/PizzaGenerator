import React from 'react';
import './DrinkItem.scss';
import {useSelector, useDispatch} from 'react-redux';

const DrinkItem = props => {

    const drinks = useSelector((state) => state.drinks);
    const dispatch = useDispatch();

    const changeStatus = item => {
        let [...newArr] = drinks;
        const index = newArr.map(item => item.id).indexOf(item.id);
        newArr[index].status = !newArr[index].status;
        dispatch({type: "UPDATE_ACTION_DRINKS", drinks: newArr});
    }
    return(
        <li className={props.drink.status ? "drinks__item active" : "drinks__item"} 
        onClick={() => changeStatus(props.drink)}>
            <img src={props.drink.img} alt="drink"></img>
            <span className="volume">{props.drink.volume}</span>
            <span className="price">{props.drink.price}₽</span>
        </li>
    )
}

export default DrinkItem;