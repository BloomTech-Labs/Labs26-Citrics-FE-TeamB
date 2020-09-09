import { ADD_CITY, REMOVE_CITY, ADD_CITY_DETAILS } from "../contexts";

const initialState = {
  cities: [{ id: "100", name: "Los Angeles", state: "CA" }],
  cityDetails: {}
};
export default function cityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CITY:
      if (state.cities.length > 2) return state;
      return { ...state, cities: [...state.cities, payload.city] };
    case REMOVE_CITY:
      let newDetails = state.cityDetails;
      delete newDetails[payload.cityId];
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== payload.cityId),
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
