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
                <p className="temperature">Temperatuer</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">Temp</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;