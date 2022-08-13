import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { searchWeatherInfo } from '../actions/weatherActions'
import bgImg from '../assets/bg.jpg'

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


    return <>
        <div data-testid="citySearchSection" className='h-100 p-5 text-bg-light mb-2' style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'round' }}>
            <h1 className='text-white-bb'>5-Day Weather Forecast</h1>
            <div className='offset-md-4 col-md-4'>
                <input type="text" className="form-control" disabled={props.isLoading} name="City" placeholder="Enter City" ref={city} />
            </div>
            {cityEmpty ? <div className='bg-light text-danger offset-md-4 col-md-4'>Enter city to search</div> : null}
            <div className='offset-md-4 col-md-4 mt-2'>
                <button type="button" className="btn btn-dark form-control" name="Search" disabled={props.isLoading} onClick={searchCity}>Search</button>
            </div>

            {props.hasError ? <div className="alert alert-danger mt-2">
                {props.errorMessage}
            </div> : null}
        </div>
        {
            props.isLoading ? <div className="spinner-border text-primary"></div> :
                <div className="display-6 text-primary fw-bolder">{props.location}</div>
        }
    </>
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