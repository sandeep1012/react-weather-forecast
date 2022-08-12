import React from "react"
import SearchCity from "./components/SearchCity"
import WeatherList from "./components/WeatherList"
import { Provider } from "react-redux"
import weatherStore from './store/store'

export const App = () => {

  return (
    <Provider store={weatherStore}>
      <div className="container text-center">
        <SearchCity />
        <WeatherList />
      </div>
    </Provider>
  )
}

