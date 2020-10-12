import { ADD_CITY, REMOVE_CITY } from "../contexts";

import { getCityDetails } from "./cityDetailsActions";
export { getCityDetails };

// Add a city and initiate the process of retrieving its details
export const addCity = city => async dispatch => {
  dispatch({
    type: ADD_CITY,
    payload: { city }
  });
  // I'm not 100% sure why wrapping this in dispatch is necessary, but it is
  dispatch(getCityDetails(city));
};

// Add a city without requesting its details
export const addCityNoDetails = city => ({ type: ADD_CITY, payload: { city } });

// Remove a city from selectedCities
export const removeCity = cityId => ({
  type: REMOVE_CITY,
  payload: { cityId }
});
