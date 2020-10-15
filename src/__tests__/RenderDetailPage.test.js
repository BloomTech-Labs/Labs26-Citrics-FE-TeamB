import React from "react";
import ReactDOM from "react-dom";
import { render, waitFor, cleanup } from "@testing-library/react";
import { mockCityDetails } from "../__mocks__/cityData";
import RenderCityDetail from "../components/pages/CityDetail/RenderCityDetail";

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

it("Renders the comparison without errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RenderCityDetail city={mockCityDetails} />, div);
});
let component;
describe("render city details test suite", () => {
  beforeEach(() => {
    component = render(<RenderCityDetail city={mockCityDetails} />);
  });

  it("renders the city detail to the page", async () => {
    const { findAllByTestId } = component;
    const detailImage = await waitFor(() =>
      findAllByTestId("city-detail-card")
    );
    expect(detailImage[0]).toBeInTheDocument();
  });
});
