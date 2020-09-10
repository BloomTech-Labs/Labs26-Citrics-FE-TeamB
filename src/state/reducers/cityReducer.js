import { ADD_CITY, REMOVE_CITY, ADD_CITY_DETAILS } from "../contexts";

const initialState = {
  selectedCities: [{ id: "100", name: "Los Angeles", state: "CA" }],
  cityDetails: {}
};
export default function cityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CITY:
      // Limit to 3 cities
      if (state.selectedCities.length > 2) return state;
      return { ...state, cities: [...state.selectedCities, payload.city] };
    case REMOVE_CITY:
      // To remove details, first copy the object, then remove the key
      let newDetails = state.cityDetails;
      delete newDetails[payload.cityId];
      return {
        ...state,
        cities: state.selectedCities.filter(city => city.id !== payload.cityId),
        cityDetails: newDetails
      };
    case ADD_CITY_DETAILS:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          [payload.id]: payload.details
        }
      };
    default:
      return state;
  }
}
