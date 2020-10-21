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
  // Get name/state info from the city list endpoint if needed
  await axios
    .get("https://b-ds.citrics.dev/cities")
    .then(r => r.data.cities)
    .then(cityList => {
      const city = cityList.find(
        ({ id: cityId }) => Number(id) === Number(cityId)
      );
      if (city) {
        name = city.name;
        state = city.state;
      }
    });
  // Return name and state from rent data, or fallback if the API call failed
  state = state ?? "CA";
  name = name ?? "Not found";
  return { name, state };
};

// Retrieve metrics from our backend and update Redux accordingly
const updateMetrics = async ({ id }, dispatch) => {
  const { data, viz } = await axios
    .get(`https://b-ds.citrics.dev/city_metrics/${id}`)
    .then(r => r?.data);

  // Request job data after getting other metrics to improve performance
  updateJobs({ id }, dispatch);
  // Updates city details with rental and population predictions - calling it separately incase of performance slow down
  updateRentalPredictions({ id }, dispatch);
  updatePopulationPredictions({ id }, dispatch);

  const details = {
    weather: data.weather,
    rent: data.rental,
    unemployRate: { data: data.unemployment, viz: viz.unemployment },
    population: { data: data.population, viz: viz.population }
  };
  dispatch(updateCityDetails(id, details));
};

// Retrieve job data separately, as it's slow
const updateJobs = ({ id }, dispatch) => {
  axios
    .get(`https://b-ds.citrics.dev/jobs/${id}`)
    .then(r => r?.data)
    .then(jobs => dispatch(updateCityDetails(id, { jobs })))
    .catch(console.error);
};

// Retrieves rental prediction data
const updateRentalPredictions = ({ id }, dispatch) => {
  axios
    .get(`https://b-ds.citrics.dev/predict_rental/${id}`)
    .then(r => r?.data)
    .then(rentalPrediction =>
      dispatch(
        updateCityDetails(id, { rentalPrediction: rentalPrediction.viz })
      )
    )
    .catch(console.error);
};
const updatePopulationPredictions = ({ id }, dispatch) => {
  axios
    .get(`https://b-ds.citrics.dev/predict_pop/${id}`)
    .then(r => r?.data)
    .then(popPrediction =>
      dispatch(updateCityDetails(id, { popPrediction: popPrediction.viz }))
    )
    .catch(console.error);
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
    .then(r => r?.data?.candidates?.[0])
    .catch(console.error);

  // If we succeeded in getting a photo ref, get the image
  // if it failed, image will instead be the placeholder above
  const photoRef = initialQuery?.photos?.[0]?.photo_reference;
  if (photoRef) {
    const imageLookupURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&key=${process.env.REACT_APP_PLACES_API_KEY}&maxwidth=700&maxheight=700`;
    fetch(proxyURL + imageLookupURL)
      .then(r => r?.blob())
      .then(r => (r ? URL.createObjectURL(r) : fallbackImage))
      .then(image => dispatch(updateCityDetails(id, { image })))
      .catch(console.error);
  } else {
    // If the places query failed, use the fallback image
    dispatch(updateCityDetails(id, { image: fallbackImage }));
  }

  // Open weather api using Lat and Lng points for more accurate search
  const geoLocation = initialQuery?.geometry?.location;
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
