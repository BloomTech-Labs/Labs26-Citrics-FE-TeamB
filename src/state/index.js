import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export { default as actions } from "./actions";

export const store = createStore(rootReducer, applyMiddleware(thunk));
