import Search from './components/search/Search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';

function App() {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <C />
        </div>
    );
}

export default App;
