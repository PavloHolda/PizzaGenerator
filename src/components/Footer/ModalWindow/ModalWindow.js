import React from 'react';
import './ModalWindow.scss';
import {useDispatch} from 'react-redux';

const ModalWindow = props => {

    const dispatch = useDispatch();

    return(
        <div className="overlay">
            <div className="modal-window">
                <div className="modal-window__area" onClick={() => dispatch({type: "UPDATE_IS_OPEN", isModalOpen: false})}></div>
                <div className="modal-window__body">
                    <button className="close-btn" onClick={() => dispatch({type: "UPDATE_IS_OPEN", isModalOpen: false})}>X</button>
                    <ul className="modal-window__list">
                        Вы заказали пиццу, с :
                        {props.activeToppings.map(item => {
                            return(
                                <li>{item.title} {item.price}₽</li>
                            )
                        })}
                        +
                        {props.activeDrinks.map(item => {
                            return(
                                <li>{item.title} {item.volume}l {item.price}₽</li>
                            )
                        })}
                    </ul>
                    <div className="modal-window__totalcost">С вас : <span>{props.totalPrice}</span></div>
                    <button className="modal-window__btn btn" onClick={() => dispatch({type: "UPDATE_IS_OPEN", isModalOpen: false})}>Заказать</button>
                </div>
            </div>
        </div>
        
    )
}

export default ModalWindow;