import React from 'react'

export const WeatherDay = ({ data }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 mt-2">
      <div className="card br-10">
        <div className='card-body-app mb-0'>
          <div className='card-bg-gray'>
            <div className="text-center text-white">
              <p className="h4 mb-1 pt-2">{data.weekDay}</p>
              <p className="h8 fw-light mb-1">{data.dateTime}</p>
              <img src={data.icon} alt="" className='m-10-ve'></img>
              <p className="display-6 mb-0"><strong>{data.temp} °C</strong> </p>
              <p className="h7 fw-normal pb-2 mb-0">{data.weatherType}</p>
            </div>
          </div>
        </div>
        <div className="card-body p-2 text-center">
          <div className="d-flex justify-content-between">
            <p className="h7 fw-normal text-wrap mb-1">Min: {data.min}°</p>
            <p className="h7 fw-normal text-wrap mb-1">Max: {data.max}°</p>
          </div>
          <div className="d-flex justify-content-between text-gray-app">
            <p className="h7 fw-normal text-wrap mb-0">Humidity:</p>
            <p className="h7 fw-normal text-wrap mb-0">{data.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
