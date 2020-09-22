import { ADD_CITY, REMOVE_CITY, ADD_CITY_DETAILS } from "../contexts";
import axios from "axios";

export const addCity = city => async dispatch => {
  dispatch({
    type: ADD_CITY,
    payload: { city }
  });
  // I'm not 100% sure why wrapping this in dispatch is necessary, but it is
  dispatch(getCityDetails(city));
};
export const removeCity = cityId => ({
  type: REMOVE_CITY,
  payload: { cityId }
});

export const getCityDetails = city => async (dispatch, getState) => {
  let { id, name, state } = city;

  // Do nothing if we already have the details on this city
  const { cityDetails } = getState().cities;
  if (cityDetails[id]) return;

  //Placeholder image to use as a fallback
  let fallbackImage = "https://i.imgur.com/YXdssOR.jpeg";

  // If we aren't given name and state, look them up from the backend
  if (!(name && state)) {
    const cityList = await axios
      .get("https://b-ds.citrics.dev/cities")
      .then(r => r.data.cities);

    const city = cityList.find(
      ({ id: cityId }) => Number(cityId) === Number(id)
    );
    name = city?.name;
    state = city?.state;
  }

  // awaiting the unemployment data
  const unemploymentRate = await axios.get(
    `https://b-ds.citrics.dev/viz/${state}`
  );
  // awaiting the population data
  const population = await axios.get(
    `https://b-ds.citrics.dev/population/${id}`
  );

  const weather = await axios.get(`https://b-ds.citrics.dev/weather/${id}`);

  // All requests are routed thru this proxy to circumvent CORS issues
  const proxyURL = "https://cors-anywhere-citrics.herokuapp.com/";

  // Initial places lookup request gives up a photo ref for the given city
  const placesLookupURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${name} ${state}&key=${process.env.REACT_APP_PLACES_API_KEY}&inputtype=textquery&fields=name,photos`;
  const initialImageQuery = await axios
    .get(proxyURL + placesLookupURL)
    .catch(console.error);
  const photoRef =
    initialImageQuery?.data?.candidates?.[0]?.photos?.[0]?.photo_reference;

  // If we succeeded in getting a photo ref, get the image
  // if it failed, image will instead be the placeholder above
  const imageLookupURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&key=${process.env.REACT_APP_PLACES_API_KEY}&maxwidth=700&maxheight=700`;
  const imageURLQuery = await fetch(proxyURL + imageLookupURL)
    .then(r => r.blob())
    .catch(console.error);

  const image = photoRef ? URL.createObjectURL(imageURLQuery) : fallbackImage;

  const details = {
    weather: weather.data.data,
    rent: 10000,
    unemployRate: JSON.parse(unemploymentRate.data).data[0],
    population: population.data ?? "NA",
    name: name ?? "Not Found",
    state: state ?? "CA",
    image
  };

  dispatch({
    type: ADD_CITY_DETAILS,
    payload: { id, details }
  });
};
