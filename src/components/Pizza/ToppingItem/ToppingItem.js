import React from 'react';
import './ToppingItem.scss';
import {useDispatch, useSelector} from 'react-redux';

const ToppingItem = props => {

    const toppings = useSelector((state) => state.toppings);
    const dispatch = useDispatch();

    const changeStatus = item => {
        let [...newArr] = toppings;
        const index = newArr.map(item => item.id).indexOf(item.id);
        newArr[index].status = !newArr[index].status;
        dispatch({type: "UPDATE_ACTION_TOPPING", toppings: newArr});
    }

    return(
        <div className="topping-item">
            <label className="container-custom-checkbox">
                {props.toppingItem.title}
                <input type="checkbox" defaultChecked={props.toppingItem.defaultChecked ? "checked" : ""} 
                    onChange={() => changeStatus(props.toppingItem)}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default ToppingItem;