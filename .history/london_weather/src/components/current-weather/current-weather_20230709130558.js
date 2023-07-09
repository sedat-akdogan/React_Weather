import "./current-weather.css";


const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city"></p>
                <p className="weather-description"></p>
            </div>
        </div>
    );
}

export default CurrentWeather;