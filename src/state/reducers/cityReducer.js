import {
  ADD_CITY,
  REMOVE_CITY,
  ADD_CITY_DETAILS,
  SINGLE_CITY_DETAILS
} from "../contexts";

const initialState = {
  selectedCities: [
    { id: 100, name: "Los Angeles", state: "CA" },
    { id: 124, name: "Phoenix", state: "Arizona" },
    { id: 562, name: "Salt Lake City", state: "Utah" }
  ],
  cityDetails: {
    100: {
      name: "Los Angeles",
      state: "CA",
      pop: 4721923,
      rental: 4851,
      weather: 33
    },
    124: {
      name: "Phoenix",
      state: "Arizona",
      pop: 5462312,
      rental: 1203,
      weather: 42
    },
    562: {
      name: "Salt Lake City",
      state: "Utah",
      pop: 928481,
      rental: 28123,
      weather: 38
    }
  },
  singleCityDetails: {}
};
export default function cityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CITY:
      // Limit to 3 cities
      if (state.selectedCities.length > 2) return state;
      // Prevent adding duplicates
      if (
        state.selectedCities.find(
          ({ id }) => Number(id) === Number(payload.city.id)
        )
      ) {
        return state;
      }
      return {
        ...state,
        selectedCities: [...state.selectedCities, payload.city]
      };
    case REMOVE_CITY:
      // To remove details, first copy the object, then remove the key
      let newDetails = { ...state.cityDetails };
      delete newDetails[payload.cityId];
      return {
        ...state,
        selectedCities: state.selectedCities.filter(
          // Would use != instead here, but eslint doesn't allow it
          // So must typecast both operands manually
          city => Number(city.id) !== Number(payload.cityId)
        ),
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
    case SINGLE_CITY_DETAILS:
      return {
        ...state,
        // sets the single city details whenever a the single city action is fired
        singleCityDetails: payload
      };
    default:
      return state;
  }
}
