import React, { useState } from "react";
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
  const [isLoading, setLoadingState] = useState(false);

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

  // This function will update searchResults whenever the user changes their preferences
  // Currently unimplemented
  const getSearchResults = () => {
    setLoadingState(true);
    //await axios.something
    setSearchResults(initialResults);
    setLoadingState(false);
  };

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
          <Skeleton active />
        ) : (
          searchResults.map(elem => <SearchResult {...elem} key={elem.id} />)
        )}
      </div>
    </div>
  );
}
