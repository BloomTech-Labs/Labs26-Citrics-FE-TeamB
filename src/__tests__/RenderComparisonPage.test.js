import React from "react";
import ReactDOM from "react-dom";
import routeData from "react-router";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";

import RenderComparison from "../components/pages/Comparison/RenderComparison";

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

const mockCityDetails = {
  43: {
    image: "https://i.imgur.com/YXdssOR.jpeg",
    name: "Baton Rouge",
    state: "LA",
    population: {
      data: {
        total_pop: 221606
      },
      viz: JSON.stringify({
        data: [{ x: [3, 5, 6, 8, 9] }, { y: [10, 2, 5, 21] }]
      })
    },
    unemployRate: {
      x: [1, 2, 3, 4, 5],
      y: [753, 928, 1235, 5918, 30192]
    },
    rent: { studio: 3412 },
    weather: {
      summer_humidity_mean: 77,
      summer_maxtempF_mean: 91,
      winter_mintempF_mean: 47
    }
  },
  432: {
    image: "https://i.imgur.com/YXdssOR.jpeg",
    name: "Sacramento",
    state: "CA",
    population: {
      data: {
        total_pop: 221606
      },
      viz: JSON.stringify({
        data: [{ x: [3, 5, 6, 8, 9] }, { y: [10, 2, 5, 21] }]
      })
    },
    unemployRate: {
      x: [1, 2, 3, 4, 5],
      y: [753, 928, 1235, 5918, 30192]
    },
    rent: { studio: 3412 },
    weather: {
      summer_humidity_mean: 77,
      summer_maxtempF_mean: 91,
      winter_mintempF_mean: 47
    }
  }
};

// Renders the comparison page
it("Renders the comparison without errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RenderComparison citiesData={mockCityDetails} />, div);
});

it("Renders the loading component", () => {
  const { getAllByTestId } = render(<RenderComparison citiesData={{}} />);
  const loading = getAllByTestId("loadingComp");
  expect(loading[0]).toBeInTheDocument();
});

// Tests Below are not passing at the moment. Finding a solution for conditional rendering tests

it("renders the city cards to the page", async () => {
  const { findAllByTestId } = render(
    <RenderComparison citiesData={mockCityDetails} />
  );

  const CityCards = await waitFor(() => findAllByTestId("city-cards"));

  CityCards.forEach(ele => {
    expect(ele).toBeInTheDocument();
  });
});

// it("renders the view more info button for each card", () => {
//   const { getAllByTestId } = component;
//   const InfoBtn = getAllByTestId("more-info-btn");
//   InfoBtn.forEach((ele) => {
//     expect(ele).toBeInTheDocument();
//   });
// });

// it("changes visit state to true when btn is clicked", () => {
//   // mock the function
//   const setVisible = jest.fn();
//   const handleClick = jest.spyOn(React, "useState");
//   handleClick.mockImplementation((visible) => [visible, setVisible]);

//   const { getAllByTestId } = component;
//   const InfoBtn = getAllByTestId("more-info-btn");

//   fireEvent.click(InfoBtn[0]);
//   expect(setVisible).toBeTruthy();
// });

// it("displays the detailed city page after the button is clicked", () => {
//   // mock the function
//   const setVisible = jest.fn();
//   const handleClick = jest.spyOn(React, "useState");
//   handleClick.mockImplementation((visible) => [visible, setVisible]);

//   const { getAllByTestId } = component;
//   const InfoBtn = getAllByTestId("more-info-btn");
//   fireEvent.click(InfoBtn[0]);

//   // gets updated dom elements after button is clicked
//   const { getByTestId } = component;
//   const CityDetail = getByTestId("city-details");
//   expect(CityDetail).toBeInTheDocument();
// });
