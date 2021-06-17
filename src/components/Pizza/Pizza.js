import React from 'react';
import './Pizza.scss';
import ToppingItem from './ToppingItem/ToppingItem';
import CurrentPizzaItem from './CurrentPizzaItem/CurrentPizzaItem';
import {useSelector} from 'react-redux';

const Pizza = props => {

    const toppings = useSelector((state) => state.toppings);

    return(
        <section className="main">
            <div className="container">
                <div className="creator-pizza">
                    <h1>Конструктор пиццы</h1>
                    <div className="creator-pizza__wrapper">
                        <div className="creator-pizza__left">
                            {toppings.filter(item => item.id > 2 && item.id <= 7).map(item => {
                                    return(
                                        <ToppingItem
                                            key={item.id}
                                            toppingItem={item}
                                        />
                                    )
                                }   
                            )}
                        </div>
                        <div className="creator-pizza__center">
                            <div className="current-pizza">
                                {toppings.filter(item => item.status === true).map(item => {
                                    return(
                                        <CurrentPizzaItem
                                            key={item.id}
                                            pizzaItem={item}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="creator-pizza__right">
                            {toppings.filter(item => item.id > 7).map(item => {
                                    return(
                                        <ToppingItem
                                            key={item.id}
                                            toppingItem={item}
                                        />
                                    )
                                }   
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pizza;