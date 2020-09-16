import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import RenderComparison from "../components/pages/Comparison/RenderComparison";

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
  component = render(
    <Provider store={store}>
      <RenderComparison citiesData={store.getState().cities.cityDetails} />
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

it("renders the city cards to the page", () => {
  const { getAllByTestId } = component;
  const CityCards = getAllByTestId("city-cards");
  CityCards.forEach(ele => {
    expect(ele).toBeInTheDocument();
  });
});

it("renders the view more info button for each card", () => {
  const { getAllByTestId } = component;
  const InfoBtn = getAllByTestId("more-info-btn");
  InfoBtn.forEach(ele => {
    expect(ele).toBeInTheDocument();
  });
});

it("changes visit state to true when btn is clicked", () => {
  // mock the function
  const setVisible = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(visible => [visible, setVisible]);

  const { getAllByTestId } = component;
  const InfoBtn = getAllByTestId("more-info-btn");

  fireEvent.click(InfoBtn[0]);
  expect(setVisible).toBeTruthy();
});

it("displays the detailed city page after the button is clicked", () => {
  // mock the function
  const setVisible = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(visible => [visible, setVisible]);

  const { getAllByTestId } = component;
  const InfoBtn = getAllByTestId("more-info-btn");
  fireEvent.click(InfoBtn[0]);

  // gets updated dom elements after button is clicked
  const { getByTestId } = component;
  const CityDetail = getByTestId("city-details");
  expect(CityDetail).toBeInTheDocument();
});
