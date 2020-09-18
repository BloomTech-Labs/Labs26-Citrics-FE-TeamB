import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { addCity } from "../state/actions";
import SearchBar from "../components/pages/Nav/SearchBar";
const mockStore = configureStore([]);
describe("<SearchBar />", () => {
  let store, component;
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    act(() => {
      component = render(
        <Provider store={store}>
          <SearchBar />
        </Provider>
      );
    });
  });
  // TODO: Write these tests
  it.todo("Shows a popup with results when typing");
  it.todo("Adds a city to selectedCities when clicked on");
});
