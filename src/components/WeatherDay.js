import React from 'react'

export const WeatherDay = ({ data }) => {
  return (
    <div className="col-sm-2 mt-4">
      <div className="card">
        <h4 className="card-title text-primary">{data.weekDay}</h4>
        <p className="text-muted mb-0">{data.dateTime}</p>

        <img src={data.icon} className="card-img-top" alt=""></img>
        <div className="card-body pt-0">
          <h5 className='text-info'>{data.temp} °C</h5>
          <p className="card-text font-weight-bold">{data.weatherType}</p>
          {/* <p>{data.min}/{data.max}</p> */}
        </div>
        <div className="card-footer">
          <small className="text-muted ml-0 text-dark">Humidity: {data.humidity}</small>
        </div>
      </div>
    </div>
  )
}
