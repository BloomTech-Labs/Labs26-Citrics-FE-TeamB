import { ADD_CITY, REMOVE_CITY, ADD_CITY_DETAILS } from "../contexts";
import axios from "axios";

export const addCity = city => async dispatch => {
  dispatch({
    type: ADD_CITY,
    payload: { city }
  });
  // changing the param to the entire city for now just to test actions
  // once we have the proper endpoints will change back
  dispatch(getCityDetails(city));
};
export const removeCity = cityId => ({
  type: REMOVE_CITY,
  payload: { cityId }
});

export const getCityDetails = ({ id, name, state }) => async dispatch => {
  //Placeholder image for cities with no Places API image result
  const fallbackImage = "https://i.imgur.com/YXdssOR.jpeg";

  // If we aren't given name and state, look them up from the backend
  if (!(name && state)) {
    const cityList = await axios
      .get("https://b-ds.citrics.dev/cities")
      .then(r => r.data.cities);
    const city = cityList.find(
      ({ id: cityId }) => Number(cityId) === Number(id)
    );
    console.log(city);
    name = city?.name;
    state = city?.state;
  }
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const placesLookupURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${name} ${state}&key=${process.env.REACT_APP_PLACES_API_KEY}&inputtype=textquery&fields=name,photos`;
  const initialImageQuery = await axios
    .get(proxyURL + placesLookupURL)
    .catch(console.error);
  const photoRef =
    initialImageQuery?.data?.candidates?.[0]?.photos?.[0]?.photo_reference;
  console.log(photoRef);

  const image = null;
  const details = {
    population: 100,
    weather: "perfect",
    rent: 10000,
    name: name ?? "Not Found",
    state: state ?? "CA",
    image: image ?? fallbackImage
  };
  dispatch({
    type: ADD_CITY_DETAILS,
    payload: { id, details }
  });
};
