import {
  ADD_CITY,
  REMOVE_CITY,
  ADD_CITY_DETAILS,
  UPDATE_CITY_DETAILS
} from "../contexts";
import axios from "axios";

export const addCity = city => async dispatch => {
  dispatch({
    type: ADD_CITY,
    payload: { city }
  });
  // I'm not 100% sure why wrapping this in dispatch is necessary, but it is
  dispatch(getCityDetails(city));
};

export const addCityNoDetails = city => ({ type: ADD_CITY, payload: { city } });

export const removeCity = cityId => ({
  type: REMOVE_CITY,
  payload: { cityId }
});

const updateCityDetails = (id, details) => ({
  type: UPDATE_CITY_DETAILS,
  payload: { id, details }
});

const retrieveNameState = async ({ id, name, state }) => {
  // Do nothing if we already have the name and state
  if (name && state) return { name, state };
  // Get name/state info from the rent endpoint if needed
  const rent = await axios
    .get(`https://b-ds.citrics.dev/rental/${id}`)
    .then(r => r?.data?.data)
    .catch(console.error);

  // Return name and state from rent data, or fallback if the API call failed
  state = rent?.state ?? "CA";
  name = rent?.city ?? "Not found";
  return { name, state };
};
const retrieveMetrics = id => {};
const retrieveImage = ({ name, state }) => {};
const retrieveCurrentWeather = ({ lat, lon }) => {};

export const getCityDetails = city => async (dispatch, getState) => {
  let { id } = city;

  // Do nothing if we already have the details on this city
  const { cityDetails } = getState().cities;
  if (cityDetails[id]) return;

  // Create a blank entry for this city to prevent double data fetching
  await dispatch({ type: ADD_CITY_DETAILS, payload: { id, details: { id } } });

  //Placeholder image to use as a fallback
  let image = "https://i.imgur.com/YXdssOR.jpeg";

  // Get name and state (if needed) and update the city entry
  let { name, state } = await retrieveNameState(city);
  dispatch(updateCityDetails(id, { name, state }));

  // awaiting the unemployment data
  const unemployRate = await axios
    .get(`https://b-ds.citrics.dev/unemployment/${id}`)
    .then(r => r?.data)
    .catch(console.error);

  // awaiting the rent data
  const rent = await axios
    .get(`https://b-ds.citrics.dev/rental/${id}`)
    .then(r => r?.data?.data)
    .catch(console.error);

  // awaiting the population data
  const population = await axios
    .get(`https://b-ds.citrics.dev/population/${id}`)
    .then(r => r?.data)
    .catch(console.error);
  // awaiting weather data
  const weather = await axios
    .get(`https://b-ds.citrics.dev/weather/${id}`)
    .then(r => r?.data?.data)
    .catch(console.error);

  // awaiting job data
  const jobs = await axios
    .get(`https://b-ds.citrics.dev/jobs/${id}`)
    .then(r => r?.data)
    .catch(console.error);

  // All requests are routed thru this proxy to circumvent CORS issues
  const proxyURL = "https://cors-anywhere-citrics.herokuapp.com/";

  // Initial places lookup request gives up a photo ref for the given city
  const placesLookupURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${name} ${state}&key=${process.env.REACT_APP_PLACES_API_KEY}&inputtype=textquery&fields=name,photos,geometry`;
  const initialQuery = await axios
    .get(proxyURL + placesLookupURL)
    .catch(console.error);
  const photoRef =
    initialQuery?.data?.candidates?.[0]?.photos?.[0]?.photo_reference;

  //  Lat and Lng to use for open weather api
  const geoLocation = initialQuery?.data?.candidates?.[0]?.geometry?.location;

  // If we succeeded in getting a photo ref, get the image
  // if it failed, image will instead be the placeholder above
  if (photoRef) {
    const imageLookupURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&key=${process.env.REACT_APP_PLACES_API_KEY}&maxwidth=700&maxheight=700`;
    const imageURLQuery = await fetch(proxyURL + imageLookupURL)
      .then(r => r.blob())
      .catch(console.error);

    image = URL.createObjectURL(imageURLQuery);
  }

  // Open weather api using Lat and Lng points for more accurate search
  const currentWeather = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${geoLocation?.lat}&lon=${geoLocation?.lng}&exclude=minutely,hourly,daily&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
    )
    .then(r => r?.data)
    .catch(console.error);

  const details = {
    currentWeather,
    weather,
    rent,
    unemployRate,
    population,
    name,
    state,
    image,
    jobs
  };

  dispatch(updateCityDetails(id, details));
};
