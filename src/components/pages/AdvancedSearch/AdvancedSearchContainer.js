import React, { useState, useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

import SearchFilters from "./SearchFilters";
import SearchResult from "./SearchResult";
import {
  POP_MIN,
  POP_MAX,
  RENT_MIN,
  RENT_MAX,
  WEATHER_MIN,
  WEATHER_MAX
} from "./constants";
import { Skeleton } from "antd";

const initialSearchPrefs = {
  rooms: "1br",
  pop_min: POP_MIN,
  pop_max: POP_MAX,
  rent_min: RENT_MIN,
  rent_max: RENT_MAX,
  weather_min: WEATHER_MIN,
  weather_max: WEATHER_MAX
};

//TEMPORARY - replace with [] once search endpoint is implemented
const initialResults = [{ id: 1, name: "Chandler", state: "AZ" }];

export default function AdvancedSearchContainer(props) {
  const [searchResults, setSearchResults] = useState(initialResults);
  const [isLoading, setLoadingState] = useState(true);

  // I opted to store searchPrefs in an object to simplify getting/setting values
  // Otherwise we'd need many different useLocalStorage calls
  // It can potentially impact performance, but in my testing everything was plenty fast
  const [searchPrefs, setSearchPrefs] = useLocalStorage(
    "searchPrefs",
    initialSearchPrefs
  );
  // Error checking
  // If the data cached in localStorage doesn't contain a value for every expected key
  // Set all values to their defaults
  if (
    !(
      searchPrefs.rooms &&
      searchPrefs.pop_min &&
      searchPrefs.pop_max &&
      searchPrefs.rent_max &&
      searchPrefs.rent_min &&
      searchPrefs.weather_max &&
      searchPrefs.weather_min
    )
  ) {
    setSearchPrefs(initialSearchPrefs);
  }
  // Simultaneously update any number of search prefs
  // based on key-value pairs on the object passed in
  const updateNamedSearchPrefs = changes =>
    setSearchPrefs({ ...searchPrefs, ...changes });

  // This function will update searchResults whenever requested
  const getSearchResults = () => {
    setLoadingState(true);
    // Helper function to encode search parameters into a query string
    const createQueryString = data => {
      const keys = Object.keys(data);
      // Initialize the string
      let str = "?";
      let i;
      // Add every city but the last one to the string followed by an '&'
      for (i = 0; i < keys.length - 1; i++) {
        str += `${keys[i]}=${data[keys[i]]}&`;
      }
      // Add the last city to the string without the trailing '&'
      str += `${keys[i]}=${data[keys[i]]}`;
      return str;
    };
    console.log(createQueryString(searchPrefs));
    //await axios.something
    setTimeout(() => {
      setSearchResults(initialResults);
      setLoadingState(false);
    }, 1000);
  };

  // Retrieve searchResults automatically on initial component load
  useEffect(getSearchResults, []);

  return (
    <div className="advanced-search-container">
      <SearchFilters
        searchPrefs={searchPrefs}
        updateSearchPrefs={updateNamedSearchPrefs}
        getSearchResults={getSearchResults}
      />
      <br />
      <div className="search-results">
        <h2>Results:</h2>
        {isLoading ? (
          <Skeleton active title={false} paragraph={{ rows: 10 }} />
        ) : (
          searchResults.map(elem => <SearchResult {...elem} key={elem.id} />)
        )}
      </div>
    </div>
  );
}
