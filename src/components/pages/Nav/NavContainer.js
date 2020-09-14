// React imports
import React, { useState, useEffect } from "react";
// Styling
import { Drawer, Button, AutoComplete } from "antd";
// Dummy city data
import { cities } from "./cityList";
import "./styles.css";

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
    <div className="navbar">
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
        <button>Search</button>
        <ul>
          {searchResults.map(item => (
            <li>{item.value}</li>
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
    </div>
  );
}
