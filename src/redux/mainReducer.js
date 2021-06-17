import {toppings, drinks} from '../consts/consts'

const initialValue = {
    toppings: toppings,
    drinks: drinks,
    isModalOpen: false,
}



const mainReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'UPDATE_ACTION_TOPPING' :
            return {
                ...state,
                toppings: action.toppings
            }
        case 'UPDATE_ACTION_DRINKS' :
            return {
                ...state,
                drinks: action.drinks
            }
        case 'UPDATE_IS_OPEN' :
            return {
                ...state,
                isModalOpen: action.isModalOpen
            }
        default :
            return state
    }
    
}

export default mainReducer;