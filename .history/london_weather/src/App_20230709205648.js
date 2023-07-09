import Search from './components/search/Search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';


function App() {

    const [currentWeather, setCurrentWeather] = useState();
    const [forecast, setForecast] = useState();

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        const forcastFetch = fetch(`${WEATHER_API_URL}/forcast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forcastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forcastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forcastResponse });
            })
            .catch((err) => console.log(err));
    }
    console.log(currentWeather);
    console.log(forecast);

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && < CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={} />}
        </div>
    );
}

export default App;
