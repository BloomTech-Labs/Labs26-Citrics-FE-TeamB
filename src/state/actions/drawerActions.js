import { TOGGLE_DRAWER, SET_DRAWER_STATE } from "../contexts";
export const toggleDrawer = () => ({ type: TOGGLE_DRAWER });
export const openDrawer = () => ({
  type: SET_DRAWER_STATE,
  payload: { isOpen: true }
});
export const closeDrawer = () => ({
  type: SET_DRAWER_STATE,
  payload: { isOpen: false }
});
