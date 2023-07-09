import Search from './components/search/Search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY} from './api';


function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const []

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

        const forcastFetch = fetch(`${WEATHER_API_URL}/forcast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

        Promise.all([currentWeatherFetch, forcastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forcastResponse = await response[1].json();
            })
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    );
}

export default App;
