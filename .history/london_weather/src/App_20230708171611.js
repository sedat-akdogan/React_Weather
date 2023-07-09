import Search from './components/search/Search';
import './App.css';

function App() {
    return (
        <div className="container">
            <Search onSearchChange={handle} />
        </div>
    );
}

export default App;
