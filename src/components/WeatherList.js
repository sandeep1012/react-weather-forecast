import React from 'react'
import { connect } from 'react-redux'
import { WeatherDay } from './WeatherDay'

const WeatherList = (props) => {
    return (
        <div className='row justify-content-center m-2' data-testid="weatherListSection">
            {!!props.weatherInfo ?
                props.weatherInfo.map(info => {
                    return (<WeatherDay key={info.id} data={info} />)
                }) :
                <div>
                    <img src="https://image.ibb.co/g69ZDx/682111_cloud_512x512.png" />
                    <p className="h7 fw-bold text-secondary">Enter valid city name and click on search to fetch 5 days weather details!</p>
                </div>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        weatherInfo: state.weatherInfo.weatherInfo,

    }
}

export default connect(mapStateToProps)(WeatherList)