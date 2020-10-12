import axios from "axios";
import { ADD_CITY_DETAILS, UPDATE_CITY_DETAILS } from "../contexts";

// Action creator to create a new cityDetails entry
const addCityDetails = (id, details) => ({
  type: ADD_CITY_DETAILS,
  payload: { id, details }
});

// Action creator to update details for an existing city
const updateCityDetails = (id, details) => ({
  type: UPDATE_CITY_DETAILS,
  payload: { id, details }
});

/** Retrieve the relevant details for a city of given id and update Redux accordingly.
 * @param {Object} city The city (must contain an id key)
 */
export const getCityDetails = city => async (dispatch, getState) => {
  let { id } = city;

  // Do nothing if we already have the details on this city
  const { cityDetails } = getState().cities;
  if (cityDetails[id]) return;

  // Create a blank entry for this city to prevent double data fetching
  await dispatch(addCityDetails(id, { id }));

  // Get name and state (if needed) and update the city entry
  let { name, state } = await retrieveNameState(city);
  // We should update name and state in Redux ASAP to improve the loading experience
  dispatch(updateCityDetails(id, { name, state }));

  // Get image and weather from external APIs
  // This function will call dispatch as each datum is retrieved
  updateImageAndWeather({ id, name, state }, dispatch);

  // Get metrics from our own DS API
  // This function will call dispatch once the data is retrieved
  updateMetrics({ id }, dispatch);
};

// Initial API request to get name and state if not known
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

// Retrieve metrics from our backend and update Redux accordingly
const updateMetrics = async ({ id }, dispatch) => {
  const [unemployRate, rent, population, weather, jobs] = await Promise.all([
    axios
      .get(`https://b-ds.citrics.dev/unemployment/${id}`)
      .then(r => r?.data)
      .catch(console.error),
    axios
      .get(`https://b-ds.citrics.dev/rental/${id}`)
      .then(r => r?.data?.data)
      .catch(console.error),
    axios
      .get(`https://b-ds.citrics.dev/population/${id}`)
      .then(r => r?.data)
      .catch(console.error),
    axios
      .get(`https://b-ds.citrics.dev/weather/${id}`)
      .then(r => r?.data?.data)
      .catch(console.error),
    axios
      .get(`https://b-ds.citrics.dev/jobs/${id}`)
      .then(r => r?.data)
      .catch(console.error)
  ]);

  const details = {
    weather,
    rent,
    unemployRate,
    population,
    jobs
  };

  dispatch(updateCityDetails(id, details));
};

// Get Image and Weather from external APIs and update Redux accordingly
const updateImageAndWeather = async ({ id, name, state }, dispatch) => {
  //Placeholder image to use as a fallback
  let fallbackImage = "https://i.imgur.com/YXdssOR.jpeg";

  // All requests to Google Places are routed thru this proxy to circumvent CORS issues
  const proxyURL = "https://cors-anywhere-citrics.herokuapp.com/";

  // Initial places lookup request gives the photo ref and lat/lon for the given city
  const placesLookupURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${name} ${state}&key=${process.env.REACT_APP_PLACES_API_KEY}&inputtype=textquery&fields=name,photos,geometry`;
  const initialQuery = await axios
    //must use proxy here to avoid CORS error
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
    fetch(proxyURL + imageLookupURL)
      .then(r => r?.blob())
      .then(r => (r ? URL.createObjectURL(r) : fallbackImage))
      .then(image => dispatch(updateCityDetails(id, { image })))
      .catch(console.error);
  }

  // Open weather api using Lat and Lng points for more accurate search
  if (geoLocation) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${geoLocation.lat}&lon=${geoLocation.lng}&exclude=minutely,hourly,daily&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
      )
      .then(r => r?.data)
      .then(currentWeather => {
        dispatch(updateCityDetails(id, { currentWeather }));
      })
      .catch(console.error);
  }
};
