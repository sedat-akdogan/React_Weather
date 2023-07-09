import Search from './components/search/Search';
import './App.css';

function App() {
    return (
        <div className="container">
            <Search onSearchChange={handleOnSearch} />
        </div>
    );
}

export default App;
