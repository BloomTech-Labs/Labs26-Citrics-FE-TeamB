import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../../../hooks/useLocalStorage";

import SearchFilters from "./SearchFilters";
import SearchResult from "./SearchResult";
import PageNavigation from "./PageNavigation";
import {
  POP_MIN,
  POP_MAX,
  RENT_MIN,
  RENT_MAX,
  WEATHER_MIN,
  WEATHER_MAX
} from "./constants";
import { LoadingSkeleton } from "../../common";

// Set default search prefs based on max values provided by backend and stored in constants.js
const initialSearchPrefs = {
  rooms: "1br",
  pop_min: POP_MIN,
  pop_max: POP_MAX,
  rent_min: RENT_MIN,
  rent_max: RENT_MAX,
  weather_min: WEATHER_MIN,
  weather_max: WEATHER_MAX
};

const initialResults = [];

export default function AdvancedSearchContainer(props) {
  const [searchResults, setSearchResults] = useState(initialResults);
  // Results past 10 are split into pages of 10
  // pageNumber is an offset starting at zero
  // It will be multiplied by 10 to get the set of results to show
  const [pageNumber, setPageNumber] = useState(0);
  // Since we load data on initial page load, we want to start in a loading state
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
    // Display loading skeleton while we wait for results
    setLoadingState(true);

    const queryString = createQueryString(convertLocalPrefsToBackendPrefs());
    axios
      .get("https://b-ds.citrics.dev/cities" + queryString)
      .then(r => r?.data?.cities)
      .then(setSearchResults)
      .then(() => {
        setPageNumber(0);
        setLoadingState(false);
      });
    /**
     * Create a query string based on key-value pairs on a given object
     *
     * @param {object} data An object with the data to be encoded
     */
    function createQueryString(data) {
      const keys = Object.keys(data);
      // Initialize the string
      let str = "?";
      let i;
      // Add every key-value pair in data (except the last) to the string followed '&'
      for (i = 0; i < keys.length - 1; i++) {
        str += `${keys[i]}=${data[keys[i]]}&`;
      }
      // Add the last key-value pair to the string string without the trailing '&'
      str += `${keys[i]}=${data[keys[i]]}`;
      return str;
    }
    /**
     * Convert the existing local searchPrefs keys and values into the form of data the backend API is expecting.
     */
    function convertLocalPrefsToBackendPrefs() {
      const defaultValues = { ...initialSearchPrefs };
      const currentValues = { ...searchPrefs };

      // Remove jobs key, as filtering by jobs is not implemented on the backend
      delete defaultValues.jobs;
      delete currentValues.jobs;

      // Remove the default value of rooms
      // We'll be removing values that are equal to default in the next step
      // but we always want to retain the value of rooms
      defaultValues.rooms = "";

      // The max values of the search pref sliders aren't actually the max values possible
      // (e.g. POP_MAX is 2.1M but four cities have larger populations than that)
      // so this step is needed to avoid unintentionally excluding cities with outlier values
      // in any metric.
      for (const pref in currentValues) {
        // If any preference was left at the default value, delete it
        if (currentValues[pref] === defaultValues[pref]) {
          delete currentValues[pref];
        }
      }
      return currentValues;
    }
  };

  // Retrieve searchResults automatically on initial component load
  // I know there's a warning here, but it's just Hooks being picky
  // adding SearchPrefs to the dependency array would actually break our code
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
          <LoadingSkeleton rows={10} />
        ) : (
          <>
            {searchResults
              // Divide search results into pages of 10 results
              .slice(pageNumber * 10, (pageNumber + 1) * 10)
              .map(elem => (
                <SearchResult {...elem} key={elem.id} />
              ))}
            {searchResults.length === 0 ? (
              <h3>No Results</h3>
            ) : (
              <PageNavigation
                totalResults={searchResults.length}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
