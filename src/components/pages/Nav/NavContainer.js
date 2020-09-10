// React imports
import React, { useState, useEffect } from "react";
// Styling
import { Drawer, Button, AutoComplete } from "antd";
// Dummy city data
import { cities } from "./cityList";

export default function NavContainer(props) {
  // ----- State -----
  // Drawer visibility
  const [visible, setVisible] = useState(false);
  // Selected cities
  const [selectedCities, setSelectedCities] = useState([]);
  // Store search input as string
  const [searchTerm, setSearchTerm] = useState("");
  // Store search results as list
  const [searchResults, setSearchResults] = useState([]);
  //State for options for Autocomplete
  const [options, setOptions] = useState([cities]);

  // Sets user input to searchTerm
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  // Search filter functionality
  useEffect(() => {
    const results = cities.filter(item =>
      item.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  // Opens drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // Closes drawer
  const onClose = () => {
    setVisible(false);
  };

  // Functionality while searching--changing selectedCities
  const onSearch = searchText => {
    setOptions(
      //fill in with functionality to return first three responses
      !searchText ? [] : [searchResults[0], searchResults[1], searchResults[2]]
    );
  };

  //onSelect to consloe log the data
  const onSelect = data => {
    console.log("onSelect", data);
  };

  // change handler for setting the search term
  //CHANGE NAMING
  const onChange = data => {
    setSearchTerm(data);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer" //rename!
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <AutoComplete
          value={searchTerm}
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          placeholder="Enter City.."
        />
        {/* <input
          type="text"
          placeholder="Enter City.."
          value={searchTerm}
          onChange={handleChange}
        /> */}
        <button>Search</button>
        <ul>
          {searchResults.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <br />
        <br />
        <br />
        <br />

        <h4>Selected Cities</h4>
        {/* If selectedCities is empty, display string. Else display state data */}
        {selectedCities.length === 0
          ? "Please select a city"
          : selectedCities.map(item => <p>{item}</p>)}
      </Drawer>
    </>
  );
}
