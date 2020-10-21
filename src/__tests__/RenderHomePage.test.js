import RenderHomePage from "../components/pages/Home/RenderHomePage";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { toggleDrawer } from "../state/actions";

const mockStore = configureStore([]);
describe("<RenderHomePage /> test suite", () => {
  // Arrange - Act - Assert pattern
  let store, component;
  beforeEach(() => {
    store = mockStore({
      drawer: { isOpen: false }
    });
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <RenderHomePage />
      </Provider>
    );
  });

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
    const { findByText } = component;
    const showHeader = await findByText(/Citrics/i);
    expect(showHeader).toBeInTheDocument();
  });

  test("If landingpage has a background image", () => {
    const { getAllByRole } = component;
    const bgImage = getAllByRole("img")[0];
    expect(bgImage).toBeInTheDocument();
  });

  test("If Get Started Button is clickable", () => {
    const { getByText } = component;
    const getStartedBtn = getByText(/Get Started/i);
    expect(getStartedBtn).toBeInTheDocument();
  });

  test("If clicking Get Started button opens the Nav Bar", () => {
    const { getByText } = component;
    const getStartedBtn = getByText(/Get Started/i);
    fireEvent.click(getStartedBtn);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(toggleDrawer());
  });
});
