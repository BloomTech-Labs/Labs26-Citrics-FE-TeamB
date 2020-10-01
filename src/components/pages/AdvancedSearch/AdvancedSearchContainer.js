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

const initialSearchPrefs = {
  rooms: "1br",
  pop_min: POP_MIN,
  pop_max: POP_MAX,
  rent_min: RENT_MIN,
  rent_max: RENT_MAX,
  weather_min: WEATHER_MIN,
  weather_max: WEATHER_MAX
};

//TEMPORARY - delete once a search endpoint is implemented
const initialResults = [{ id: 1, name: "San Francisco", state: "CA" }];

export default function AdvancedSearchContainer(props) {
  const [searchResults, setSearchResults] = useState(initialResults);

  // I opted to store searchPrefs in an object to simplify getting/setting values
  // Otherwise we'd need many different useLocalStorage calls
  // It can potentially impact performance, but in my testing everything was plenty fast
  const [searchPrefs, setSearchPrefs] = useLocalStorage(
    "searchPrefs",
    initialSearchPrefs
  );

  // Simultaneously update any number of search prefs
  // based on key-value pairs on the object passed in
  const updateNamedSearchPrefs = changes =>
    setSearchPrefs({ ...searchPrefs, ...changes });

  // This function will update searchResults whenever the user changes their preferences
  // Currently unimplemented
  useEffect(() => {
    //await axios.something
    setSearchResults(initialResults);
  }, [searchPrefs]);

  return (
    <div className="advanced-search-container">
      <SearchFilters
        searchPrefs={searchPrefs}
        updateSearchPrefs={updateNamedSearchPrefs}
      />
      {searchResults.map(elem => (
        <SearchResult {...elem} key={elem.id} />
      ))}
    </div>
  );
}
