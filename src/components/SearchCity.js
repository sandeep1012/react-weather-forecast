import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { searchWeatherInfo } from '../actions/weatherActions'
//import bgImg from '../assets/bg.jpg'

const SearchCity = (props) => {
    //console.log('Search', props);
    const city = useRef('');
    const [cityEmpty, setCityEmpty] = useState(false)

    function searchCity() {
        //console.log('City:', city.current.value);
        if (city.current.value && city.current.value !== '') {
            setCityEmpty(false)
            props.searchWeatherInfo(city.current.value)
            //city.current.value = '';
        } else {
            setCityEmpty(true)
        }
        
    }

    // function onCityChange(e){
    //     if(e.target.value !== null && e.target.value!==''){
    //         setCityEmpty(false)
    //     } else{
    //         setCityEmpty(true)
    //     }
    // }
    //style={{backgroundImage: `url(${bgImg})`, backgroundRepeat:'round'}}

    return <div className=''>
        <div className='h-100 p-5 text-bg-light rounded-3 img-responsive' >
            
            <div className="d-inline"><input type="text" className=" d-inline" disabled={props.isLoading} placeholder="City" ref={city} /></div>
            <div className="d-inline m-2"><button type="button" className="btn btn-primary d-inline" disabled={props.isLoading} onClick={searchCity}>Search</button></div>
            {cityEmpty ? <div className='bg-light text-danger'>Enter city to search</div> : null}
            <h1>5-Day Weather Forecast</h1>

            {
                props.isLoading ? <div className="spinner-border text-primary" role="status"></div> :
                    <div className="display-6 text-secondary font-weight-bold">{props.location}</div>
            }
            {props.hasError ? <div className="alert alert-danger" role="alert">
                {props.errorMessage}
            </div> : null}
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        //weatherInfo: state.weatherInfo.weatherInfo,
        location: state.weatherInfo.location,
        isLoading: state.loading,
        hasError: state.error,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchWeatherInfo: (city) => dispatch(searchWeatherInfo(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity)