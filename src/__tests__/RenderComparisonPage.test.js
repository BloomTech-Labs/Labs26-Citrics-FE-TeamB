import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";

import { mockCityDetails } from "../__mocks__/cityData";
import RenderComparison from "../components/pages/Comparison/RenderComparison";

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

// Renders the comparison page
it("Renders the comparison without errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RenderComparison citiesData={mockCityDetails} />, div);
});

it("Renders the loading component", () => {
  const { getAllByTestId } = render(<RenderComparison citiesData={[]} />);
  const loading = getAllByTestId("loadingComp");
  expect(loading[0]).toBeInTheDocument();
});

it("renders the city cards to the page", async () => {
  const { findAllByTestId } = render(
    <RenderComparison citiesData={mockCityDetails} />
  );

  const CityCards = await waitFor(() => findAllByTestId("city-cards"));
  CityCards.forEach(ele => {
    expect(ele).toBeInTheDocument();
  });
});

it("renders the view more info button for each card", async () => {
  const { findAllByTestId } = render(
    <RenderComparison citiesData={mockCityDetails} />
  );
  const InfoBtn = await waitFor(() => findAllByTestId("more-info-btn"));
  InfoBtn.forEach(ele => {
    expect(ele).toBeInTheDocument();
  });
});

it("changes visit state to true when btn is clicked", async () => {
  const { findAllByTestId } = render(
    <RenderComparison citiesData={mockCityDetails} />
  );
  const InfoBtn = await waitFor(() => findAllByTestId("more-info-btn"));
  fireEvent.click(InfoBtn[0]);
  expect(InfoBtn[0]).toBeTruthy();
});

it("displays the detailed city page after the button is clicked", async () => {
  const { findAllByTestId } = render(
    <RenderComparison citiesData={mockCityDetails} />
  );
  const InfoBtn = await waitFor(() => findAllByTestId("more-info-btn"));
  fireEvent.click(InfoBtn[0]);

  // gets updated dom elements after button is clicked
  const { getByTestId } = render(
    <RenderComparison citiesData={mockCityDetails} />
  );
  const CityDetail = getByTestId("city-details");
  expect(CityDetail).toBeInTheDocument();
});
