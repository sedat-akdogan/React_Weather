import Search from './components/search/Search';
import './App.css';
import

function App() {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
        </div>
    );
}

export default App;
