import React, { useState, useEffect } from "react";

import { AutoComplete } from "antd";
// Dummy city data
import { cities } from "./cityList";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  // Store search results as list
  const [searchResults, setSearchResults] = useState([]);
  //State for options for Autocomplete
  const [options, setOptions] = useState(searchResults);

  // Sets user input to searchTerm
  const onChange = data => {
    setSearchTerm(data);
  };

  // Search filter functionality
  useEffect(() => {
    const results = cities
      .map(item => ({ value: `${item.name} ${item.state}`, ...item }))
      .filter(item => item.value.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  // Functionality while searching--changing selectedCities
  const onSearch = searchText => {
    setOptions(
      //fill in with functionality to return first three responses
      !searchText
        ? []
        : searchResults.length <= 3
        ? searchResults
        : searchResults.slice(0, 3)
    );
  };

  //onSelect to consloe log the data
  const onSelect = data => {
    console.log("onSelect", data);
  };

  return (
    <>
      <AutoComplete
        value={searchTerm}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="Enter City.."
      />
      <button>Search</button>
    </>
  );
}
