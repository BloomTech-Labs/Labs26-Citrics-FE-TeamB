import React, { useState, useEffect } from "react";

import { AutoComplete } from "antd";
// Dummy city data
import { cities } from "./cityList";

export default function SearchBar(props) {
  // List of all cities in database
  const [cityList, setCityList] = useState([]);
  // Search term as entered in box
  const [searchTerm, setSearchTerm] = useState("");
  // Store search results as list
  const [searchResults, setSearchResults] = useState([]);
  //State for options for Autocomplete
  const [options, setOptions] = useState([]);

  // Sets user input to searchTerm
  const onChange = data => {
    setSearchTerm(data);
  };

  // Initial city list fetching (currently using dummy data)
  useEffect(() => {
    //axios stuff goes here
    const queryResult = cities;
    setCityList(
      queryResult.map(item => ({
        value: `${item.name} ${item.state}`,
        ...item
      }))
    );
  }, []);
  // Search filter functionality
  useEffect(() => {
    const results = cityList.filter(item =>
      item.value.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, cityList]);

  // Functionality while searching--changing selectedCities
  const onSearch = searchText => {
    setOptions(
      //fill in with functionality to return first three responses
      !searchText ? [] : searchResults.slice(0, 5)
    );
  };

  //onSelect to consloe log the data
  const onSelect = data => {
    console.log("onSelect", data);
  };

  return (
    <AutoComplete
      value={searchTerm}
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Enter City.."
    />
  );
}
