import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import weatherReducer from '../reducers/weatherReducer'

let weatherStore = createStore(weatherReducer,applyMiddleware(thunk))

export default weatherStore