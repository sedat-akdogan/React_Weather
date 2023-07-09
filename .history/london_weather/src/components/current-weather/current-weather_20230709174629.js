import "./current-weather.css";


const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">City</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img src="" alt="weather" className="weather-icon" />
            </div>
            <div className="bottom">
                
            </div>
        </div>
    );
}

export default CurrentWeather;