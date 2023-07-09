import Search from './components/search/Search';
import './App.css';

function App() {

    const handleOnSearchChange = (searchData) => {
        console.log()
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
        </div>
    );
}

export default App;
