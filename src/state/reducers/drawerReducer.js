import { TOGGLE_DRAWER } from "../contexts";
const initialState = {
  isOpen: false
};
export default function drawerReducer(state = initialState, { type }) {
  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
