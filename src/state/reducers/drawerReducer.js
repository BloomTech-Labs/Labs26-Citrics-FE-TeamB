import { TOGGLE_DRAWER, SET_DRAWER_STATE } from "../contexts";
const initialState = {
  isOpen: true
};
export default function drawerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isOpen: !state.isOpen };
    case SET_DRAWER_STATE:
      return { ...state, isOpen: payload.isOpen };
    default:
      return state;
  }
}
