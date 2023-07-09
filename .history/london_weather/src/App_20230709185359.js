import Search from './components/search/Search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY} from './api';


function App() {

    const handleOnSearchChange = (searchData) => {
        const [lat, ]
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    );
}

export default App;
