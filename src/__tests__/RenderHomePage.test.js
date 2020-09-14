import RenderHomePage from "../components/pages/Home/RenderHomePage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("Renders homepage without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RenderHomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
