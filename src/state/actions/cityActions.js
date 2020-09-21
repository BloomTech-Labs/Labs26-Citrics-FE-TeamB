import { ADD_CITY, REMOVE_CITY, ADD_CITY_DETAILS } from "../contexts";
import axios from "axios";

export const addCity = city => async dispatch => {
  dispatch({
    type: ADD_CITY,
    payload: { city }
  });
  // changing the param to the entire city for now just to test actions
  // once we have the proper endpoints will change back
  getCityDetails(city);
};
export const removeCity = cityId => ({
  type: REMOVE_CITY,
  payload: { cityId }
});

export const getCityDetails = ({ id, name, state }) => async dispatch => {
  // this is just a test
  let stateName = state ? state : "CA";
  const unemploymentRate = await axios.get(
    `https://b-ds.citrics.dev/viz/${stateName}`
  );
  console.log(JSON.parse(unemploymentRate.data).data);
  // TODO: Add API call here to get detailed data
  const details = {
    population: 100,
    weather: "perfect",
    rent: 10000,
    name,
    state: stateName,
    unemployRate: JSON.parse(unemploymentRate.data).data[0]
  };

  dispatch({
    type: ADD_CITY_DETAILS,
    payload: { id, details }
  });
};
