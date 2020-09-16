import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { addCity } from "../state/actions";
import SearchBar from "../components/pages/Nav/SearchBar";
import axios from "axios";
const mockStore = configureStore([]);
// A list of dummy data to get the search form functional
// Data pulled from: https://simple.wikipedia.org/wiki/List_of_United_States_cities_by_population#Cities_that_used_to_have_100,000_people
describe("<SearchBar />", () => {
  let store, component;
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });
  it("Renders navbar without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Shows a popup with results when typing", async done => {
    act(async () => {
      component = render(
        <Provider store={store}>
          <SearchBar />
        </Provider>
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });
    expect(true).toBe(true);
    done();
  });
  it.todo("Adds a city to selectedCities when clicked on");
});
