import Search from './components/search/Search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY}


function App() {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    );
}

export default App;
