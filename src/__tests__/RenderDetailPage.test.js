import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { mockCityDetails } from "../__mocks__/cityData";
import RenderCityDetail from "../components/pages/CityDetail/RenderCityDetail";

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

// Renders the comparison page
it("Renders the comparison without errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RenderCityDetail city={mockCityDetails} />, div);
});
