// Library imports
import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import { connect } from "react-redux";
import { addCity } from "../../../state/actions";
import axios from "axios";

function SearchBar({ addCity }) {
  // List of all cities in database
  const [cityList, setCityList] = useState([]);
  // Search term as entered in box
  const [searchTerm, setSearchTerm] = useState("");
  // Store search results as list
  const [searchResults, setSearchResults] = useState([]);
  //Options to show in the Autocomplete
  const [options, setOptions] = useState([]);

  // Sets user input to searchTerm
  const onChange = data => {
    setSearchTerm(data);
  };

  // Initial city list fetching
  useEffect(() => {
    axios
    // Trailing slash is needed as it's present in DS backend
      .get("https://b-ds.citrics.dev/cities/")
      .then(r => r.data.cities)
      .then(queryResult =>
        setCityList(
          queryResult.map(item => ({
            value: `${item.name} ${item.state}`,
            ...item
          }))
        )
      );
  }, []);
  // Get search results by searching through cityList
  useEffect(() => {
    const results = cityList.filter(item =>
      item.value.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, cityList]);

  // On each keystroke, update the list shown in Autocomplete
  const onSearch = searchText => {
    setOptions(!searchText ? [] : searchResults.slice(0, 5));
  };

  //When clicking on a city, add it to the selected cities
  const onSelect = data => {
    const entry = cityList.find(({ value }) => value === data);
    // console.log("City to be added",entry);
    addCity(entry);
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
const mapPropsToState = (reduxProps, props) => props;
export default connect(mapPropsToState, { addCity })(SearchBar);
