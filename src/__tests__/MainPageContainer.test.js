import {
  MainPageContainer,
  baseMargin
} from "../components/pages/MainPageContainer/";
import { drawerWidth } from "../components/common/constants";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import React from "react";
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
    const testDiv = (await findByTestId("main-page-container")).children[0];
    // This nonsense is what was necessary to confirm
    // both divs have the same attributes
    expect(Object.keys(testDivRaw.props)[0]).toEqual(
      testDiv.attributes[0].name
    );
    expect(Object.values(testDivRaw.props)[0]).toEqual(
      testDiv.attributes[0].value
    );
    done();
  });
});
