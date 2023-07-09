import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";


const Search = () => {

    const[search, setSearch] = useState(null);

    const handleOnChange = () => {
        
    }

    return (
        <AsyncPaginate 
            placeholder="Search for a city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
        />
    );
}

export default Search;