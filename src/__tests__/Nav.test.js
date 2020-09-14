import Nav from "../components/pages/Nav/NavContainer";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { toggleDrawer } from "../state/actions";
const mockStore = configureStore([]);
describe("<Nav /> test suite", () => {
  let store, component;
  beforeEach(() => {
    store = mockStore({
      drawer: { isOpen: true },
      cities: { selectedCities: [] }
    });
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  });

  test("Renders navbar without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Nav />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test("Shows the correct title", async () => {
    const { findByText } = component;
    const showHeader = await findByText(/city search/i);
    expect(showHeader).toBeInTheDocument();
  });
});
