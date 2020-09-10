import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import drawerReducer from "./drawerReducer";

export default combineReducers({ cities: cityReducer, drawer: drawerReducer });
