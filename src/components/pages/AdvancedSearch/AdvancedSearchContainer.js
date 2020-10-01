import React, { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

import RenderSearchFilters from "./RenderSearchFilters";
import RenderSearchResult from "./RenderSearchResult";
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

export default function AdvancedSearchContainer(props) {
  const [searchResults, setSearchResults] = useState([]);

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

  return (
    <div className="advanced-search-container">
      <RenderSearchFilters
        searchPrefs={searchPrefs}
        updateSearchPrefs={updateNamedSearchPrefs}
      />
      {searchResults.map(elem => (
        <RenderSearchResult {...elem} />
      ))}
    </div>
  );
}
