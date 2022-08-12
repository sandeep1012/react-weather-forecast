import { ACTIONS, API_KEY, API_URL } from "../constant";
import axios from 'axios'

export const searchWeatherInfo = (city) => {
    //console.log('Actions', city);
    return (dispatch) => {
        dispatch({ type: ACTIONS.LOADING_SEARCH_WEATHER });
        axios.get(`${API_URL}?q=${city}&units=metric&&appid=${API_KEY}`)
            .then(res => {
                //console.log('API RESPONSE:',res);
                let filterData = res.data.list.filter(reading => {
                    return reading.dt_txt.includes("18:00:00")
                }
                )

                let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let B_Options = {
                    month: 'short', day: 'numeric',
                    hour: '2-digit', minute: '2-digit',
                    hour12: true,
                    timeZone: 'America/Los_Angeles'
                };

                let filterDataFinal = filterData.map((info, i) => {
                    let newDate = new Date();
                    newDate.setTime(info.dt * 1000)
                    return {
                        id: i.toString(),
                        icon: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,
                        min: Math.round(info.main.temp_min, 0),
                        max: Math.round(info.main.temp_max, 0),
                        temp: Math.round(info.main.temp),
                        weatherType: info.weather[0].description,
                        weekDay: weekDays[newDate.getDay()],
                        dateTime: new Intl.DateTimeFormat('en-US', B_Options).format(newDate),
                        humidity: info.main.humidity
                    } 
                })

                return {
                    weatherInfo:filterDataFinal,
                    location: res.data.city.name + ', '+ res.data.city.country 
                }
            })
            .then((finalData) => {
                //console.log('DISPATCH:', finalData);
                dispatch({ type: ACTIONS.SEARCH_WEATHER, weatherInfo: finalData })
            })
            .catch(res => {
                //console.log('ERROR:', res.response.data);
                dispatch({ type: ACTIONS.SEARCH_ERROR, errorMessage: res.response.data.message });
            })
    }
}