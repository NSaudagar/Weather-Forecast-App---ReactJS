import React, { useState } from 'react';

const WeatherForecast = () => {

    let [responseObj, setResponseObj] = useState({});
    let cityInput = React.createRef();

    function getWeatherForecast() {
        const url = "https://community-open-weather-map.p.rapidapi.com/forecast?q="+cityInput.current.value 
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "n6ioET3rlmmshaXl6k5u5oJmauFop1WjGohjsnVsCdXNo6szBz",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form>
                <div class="form-row col-sm-6 ">
                    <div class="col-auto">
                        <input type="text" ref={cityInput} class="form-control" id="city" placeholder="Enter City" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" onClick={getWeatherForecast} class="btn btn-primary mb-2">Get Weather Forecast</button>
                    </div>
                </div>
            </form>

            <div>
                <div class="card card-weather">
                    <div class="card-body">
                        <div class="weather-date-location">
                            <h2> Pune </h2>
                            <h3> MH - INDIA </h3>
                            <p class="text-gray"> <span class="weather-date">Friday, 25 March, 2019</span> </p>
                        </div>
                        <div class="weather-data d-flex">
                            <div class="mr-auto">
                                <h4 class="display-3">32 <span class="symbol">°</span>C</h4>
                                <p> Cloudy </p>
                            </div>
                        </div>
                    </div>

                    <div class="card-body p-0">
                        <div class="d-flex weakly-weather">
                            <div class="weakly-weather-item">
                                <p class="mb-0"> Sun </p> <i class="mdi mdi-weather-cloudy"></i>
                                <p class="mb-0"> 30° </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> Mon </p> <i class="mdi mdi-weather-hail"></i>
                                <p class="mb-0"> 31° </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> Tue </p> <i class="mdi mdi-weather-partlycloudy"></i>
                                <p class="mb-0"> 28° </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> Wed </p> <i class="mdi mdi-weather-pouring"></i>
                                <p class="mb-0"> 30° </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> Thu </p> <i class="mdi mdi-weather-pouring"></i>
                                <p class="mb-0"> 29° </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> Fri </p> <i class="mdi mdi-weather-snowy-rainy"></i>
                                <p class="mb-0"> 31° </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> Sat </p> <i class="mdi mdi-weather-snowy"></i>
                                <p class="mb-0"> 32° </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="align-items-center">                
                {JSON.stringify(responseObj)}
            </div>

        </div>
    )
}

export default WeatherForecast;