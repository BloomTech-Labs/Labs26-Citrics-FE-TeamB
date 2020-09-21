import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { removeCity } from "../state/actions";
import SelectedCities from "../components/pages/Nav/SelectedCities";
const mockStore = configureStore([]);
describe("<NavContainer />", () => {
  // Tests are split into two sections since the mock Redux store is immutable
  describe("Tests with no cities selected", () => {
    let store;
    beforeAll(() => {
      store = mockStore({
        cities: {
          selectedCities: []
        }
      });
    });

    it("Renders without errors", () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <Provider store={store}>
          <SelectedCities />
        </Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
    it("Displays a message and disabled button when no city is selected", async done => {
      const { findByText } = render(
        <Provider store={store}>
          <SelectedCities />
        </Provider>
      );
      // The message should say "No city selected"
      await findByText(/no city selected/i);
      // The ant button is the parent element of the span with "Details" in it
      // It should be disabled
      const button = await findByText(/details/i);
      expect(button.parentElement.getAttribute("disabled")).toEqual("");
      done();
    });
  });
  describe("Tests with one city selected", () => {
    let store, component;
    beforeEach(() => {
      store = mockStore({
        cities: {
          selectedCities: [{ id: 1, name: "Albany", state: "NY" }]
        }
      });
      store.dispatch = jest.fn();
      component = render(
        <Provider store={store}>
          <SelectedCities />
        </Provider>
      );
    });
    it("Displays the city from Redux", async done => {
      const { findByText } = component;
      await findByText(/albany/i);
      done();
    });
    it("Allows the city to be removed", async done => {
      const { findByText } = component;
      let cityDiv = await findByText(/albany/i);
      fireEvent.click(cityDiv);
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(removeCity("1"));
      done();
    });
    // TODO: Add tests for the new button
    it("Shows the button to open single-city detail view", async done => {
      const { findByText } = component;
      // findByText will throw an error if it fails
      // so no need to test further
      await findByText(/details/i);
      done();
    });
  });
  describe("Tests with multiple cities selected", () => {
    let store, component;
    beforeEach(() => {
      store = mockStore({
        cities: {
          selectedCities: [
            { id: 1, name: "Albany", state: "NY" },
            { id: 2, name: "Allegheny", state: "PA" },
            { id: 3, name: "Brooklyn", state: "NY" }
          ]
        }
      });
      store.dispatch = jest.fn();
      component = render(
        <Provider store={store}>
          <SelectedCities />
        </Provider>
      );
    });
    it("Displays the cities from Redux", async done => {
      const { findByText } = component;
      // findByText will throw an error if it finds nothing
      // Simply calling it is a sufficient test
      await findByText(/albany/i);
      await findByText(/brooklyn/i);
      await findByText(/allegheny/i);
      done();
    });
    it("Allows cities to be removed", async done => {
      const { findByText } = component;
      let cityDiv = await findByText(/albany/i);
      fireEvent.click(cityDiv);
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(removeCity("1"));
      cityDiv = await findByText(/brooklyn/i);
      fireEvent.click(cityDiv);
      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch).toHaveBeenCalledWith(removeCity("3"));
      done();
    });
    it("Shows the button to open comparison view", async done => {
      const { findByText } = component;
      // findByText will throw an error if it fails
      // so no need to test further
      await findByText(/compare/i);
      done();
    });
  });
});
