import RenderHomePage from "../components/pages/Home/RenderHomePage";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { getByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "../state";

describe("<RenderHomePage /> test suite", () => {
  //COMMENTING OUT DUE TO NOT HAVING LOGIN/AUTHENTICATION IN RELEASE 1--KEEPING IF NEEDED IN RELEASE 2
  // test('it handles a loading state', () => {
  //   const authService = {
  //     logout: jest.fn(),
  //   };
  //   const { getByText } = render(
  //     <Router>
  //       <RenderHomePage userInfo={{ name: 'Sara' }} authService={authService} />
  //     </Router>
  //   );
  //   const button = getByText(/logout/i);
  //   userEvent.click(button);
  //   expect(authService.logout).toHaveBeenCalledTimes(1);
  //   expect(getByText(/hi sara welcome to labs basic spa/i).innerHTML).toBe(
  //     'Hi Sara Welcome to Labs Basic SPA'
  //   );
  // });

  // Arrange - Act - Assert pattern
  test("Renders homepage without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <RenderHomePage />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test('If header title "Citrics" is on the document', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <RenderHomePage />
      </Provider>
    );
    const showHeader = await findByText(/Citrics/i);
    expect(showHeader).toBeInTheDocument();
  });

  test("If landingpage has a background image", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <RenderHomePage />
      </Provider>
    );
    const bgImage = getByRole("img");
    expect(bgImage).toBeInTheDocument();
  });

  test("If Get Started Button is clickable", () => {
    const { getByText } = render(
      <Provider store={store}>
        <RenderHomePage />
      </Provider>
    );
    const getStartedBtn = getByText(/Get Started/i);
    expect(getStartedBtn).toBeInTheDocument();
  });

  test("If clicking Get Started button opens the Nav Bar", () => {});
});
