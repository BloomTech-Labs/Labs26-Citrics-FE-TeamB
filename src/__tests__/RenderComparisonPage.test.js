import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import axios from "axios";
import configureStore from "redux-mock-store";
import RenderComparison from "../components/pages/Comparison/RenderComparison";
// import GraphContainer from "../components/common/GraphContainer";

const mockStore = configureStore([]);
let store, component;
beforeEach(() => {
  store = mockStore({
    cities: {
      cityDetails: {
        100: {
          name: "Los Angeles",
          state: "CA",
          pop: 4721923,
          rental: 4851,
          weather: 33
        },
        124: {
          name: "Phoenix",
          state: "AZ",
          pop: 5462312,
          rental: 1203,
          weather: 42
        },
        562: {
          name: "Salt Lake City",
          state: "UT",
          pop: 928481,
          rental: 28123,
          weather: 38
        }
      }
    }
  });
  store.dispatch = jest.fn();
  jest.mock("axios");
  component = render(
    <Provider store={store}>
      <RenderComparison />
    </Provider>
  );
});
// Renders the comparison page
it("Renders the comparison without errors", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Provider store={store}>
      <RenderComparison />
    </Provider>,
    div
  );
});
