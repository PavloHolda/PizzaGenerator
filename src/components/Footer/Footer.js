import React from 'react';
import './Footer.scss';
import {useSelector, useDispatch} from 'react-redux';
import ModalWindow from './ModalWindow/ModalWindow.js'

const Footer = props => {

    const toppings = useSelector((state) => state.toppings);
    const drinks = useSelector((state) => state.drinks);
    const isModalOpen = useSelector((state) => state.isModalOpen);
    const dispatch = useDispatch();

    let activeToppingsPrice = toppings.filter(item => item.status === true).map(item => item.price);
    let activeDrinksPrice = drinks.filter(item => item.status === true).map(item => item.price);
    let activeToppings = toppings.filter(item => item.status === true);
    let activeDrinks = drinks.filter(item => item.status === true);
    let fullPrice = [...activeToppingsPrice,...activeDrinksPrice].reduce((accum, item) => accum + item);

    return(
        <section className="footer">
            <div className="footer__wrapper">
                <div className="make-an-order">
                    <div className="make-an-order__allprice">
                        <p>К оплате: <span>{fullPrice}</span></p>
                    </div>
                    <button className="make-an-order__btn btn" onClick={() => dispatch({type: "UPDATE_IS_OPEN", isModalOpen: true})}>Сделать заказ</button>
                </div>
            </div>
            {isModalOpen ? <ModalWindow  totalPrice={fullPrice} activeToppings={activeToppings} activeDrinks={activeDrinks}/> : null}
        </section>
    )
}

export default Footer;