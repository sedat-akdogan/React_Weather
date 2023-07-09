import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";


const Search = () => {

    const[search, setSearch]

    return (
        <AsyncPaginate 
            placeholder="Search for a city"
            debounceTimeout={600}
            value={search}
        />
    );
}

export default Search;