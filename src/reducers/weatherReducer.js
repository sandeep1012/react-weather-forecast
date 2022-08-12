import {ACTIONS} from '../constant'

function weatherReducer(state = { weatherInfo: {}, loading: false, error: false, errorMessage: '' }, action) {
    switch (action.type) {
        case ACTIONS.LOADING_SEARCH_WEATHER:
            return {
                ...state,
                weatherInfo: {...state.weatherInfo},
                loading: true,
                error: false, errorMessage: ''
            }
        case ACTIONS.SEARCH_WEATHER:
            return {
                ...state,
                weatherInfo: action.weatherInfo,
                loading: false,
                error: false, errorMessage: ''
            }
        case ACTIONS.SEARCH_ERROR:
            return {
                ...state,
                weatherInfo: {},
                loading: false,
                error: true, 
                errorMessage: action.errorMessage
            }

        default:
            return state;
    }
}

export default weatherReducer;
