import React from 'react'
import { connect } from 'react-redux'
import { WeatherDay } from './WeatherDay'

const WeatherList = (props) => {

    return (
        <div className='row justify-content-center mt-2'>
            {!!props.weatherInfo && props.weatherInfo.map(info => {
                return (<WeatherDay key={info.id} data={info} />)
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        weatherInfo: state.weatherInfo.weatherInfo
    }
}

export default connect(mapStateToProps)(WeatherList)