import React from 'react';
import {useSelector} from 'react-redux';
import DrinkItem from './DrinkItem/DrinkItem';
import './Drinks.scss';

const Drinks = props => {

    const drinks = useSelector((state) => state.drinks);

    return(
        <section className="drinks">
            <div className="drinks__wrapper">
                <ul className="drinks__list">
                    {
                        drinks.map(item => {
                            return(
                                <DrinkItem
                                    key={item.id}
                                    drink={item}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Drinks;