import React, { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

import RenderSearchFilters from "./RenderSearchFilters";
import RenderSearchResult from "./RenderSearchResult";

const POP_MIN = 10000;
const POP_MAX = 2100000;
const RENT_MIN = 100;
const RENT_MAX = 5100;
const WEATHER_MIN = 15;
const WEATHER_MAX = 105;

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
  // useLocalStorage is a custom hook made by David Horstman
  // For more info hover over it or see the docs in /hooks/useLocalStorage.js

  // Simultaneously update any number of search prefs
  // based on key-value pairs on the object passed in
  // This is used by sliders to set both ends at once
  const updateNamedSearchPrefs = changes =>
    setSearchPrefs({ ...searchPrefs, ...changes });

  return (
    <div className="advanced-search-container">
      <RenderSearchFilters />
      {this.state.searchResults.map(elem => (
        <RenderSearchResult {...elem} />
      ))}
    </div>
  );
}
