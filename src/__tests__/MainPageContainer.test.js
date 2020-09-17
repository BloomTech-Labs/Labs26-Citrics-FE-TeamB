import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch
} from "react-router-dom";
import {
  MainPageContainer,
  baseMargin
} from "../components/pages/MainPageContainer/";
import drawerWidth from "../components/pages/Nav/drawerWidth";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

const mockStore = configureStore([]);
describe("<MainPageContainer />", () => {
  it("Has the correct margin when the drawer is open", async done => {
    const store = mockStore({
      drawer: { isOpen: false }
    });
    const { findByTestId } = render(
      <Provider store={store}>
        <MainPageContainer />
      </Provider>
    );
    const mainDiv = await findByTestId("main-page-container");
    const offset = mainDiv.style["margin-left"];
    expect(offset).toBe(`${baseMargin}px`);
    done();
  });
  it("Has the correct margin when the drawer is closed", async done => {
    const store = mockStore({
      drawer: { isOpen: true }
    });
    const { findByTestId } = render(
      <Provider store={store}>
        <MainPageContainer />
      </Provider>
    );
    const mainDiv = await findByTestId("main-page-container");
    const offset = mainDiv.style["margin-left"];
    expect(offset).toBe(`${baseMargin + drawerWidth}px`);
    done();
  });
  it("Renders any child components passed into it without modifying them", async done => {
    const store = mockStore({
      drawer: { isOpen: false }
    });
    const testDivRaw = <div data-testid="test-div" />;
    const { findByTestId } = render(
      <Provider store={store}>
        <MainPageContainer>{testDivRaw}</MainPageContainer>
      </Provider>
    );
    const mainDiv = await findByTestId("main-page-container");
    const testDiv = await findByTestId("test-div");
    expect(Object.keys(testDivRaw.props)[0]).toEqual(
      testDiv.attributes[0].name
    );
    expect(Object.values(testDivRaw.props)[0]).toEqual(
      testDiv.attributes[0].value
    );
    done();
  });
});
