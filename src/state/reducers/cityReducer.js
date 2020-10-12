import {
  ADD_CITY,
  REMOVE_CITY,
  ADD_CITY_DETAILS,
  UPDATE_CITY_DETAILS
} from "../contexts";

const initialState = {
  selectedCities: [],
  cityDetails: {}
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
      // We're only removing the city from selectedCities
      // its details will remain cached in cityDetails
      return {
        ...state,
        selectedCities: state.selectedCities.filter(
          // Would use != instead here, but eslint doesn't allow it
          // So must typecast both operands manually
          city => Number(city.id) !== Number(payload.cityId)
        )
      };
    case ADD_CITY_DETAILS:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          [payload.id]: payload.details
        }
      };
    case UPDATE_CITY_DETAILS:
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          [payload.id]: {
            ...state.cityDetails[payload.id],
            ...payload.details
          }
        }
      };
    default:
      return state;
  }
}
