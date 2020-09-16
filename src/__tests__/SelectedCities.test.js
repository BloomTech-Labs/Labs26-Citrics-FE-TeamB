import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { removeCity } from "../state/actions";
import SelectedCities from "../components/pages/Nav/SelectedCities";
const mockStore = configureStore([]);
describe("<NavContainer />", () => {
  it("Is hidden when no cities are selected", async done => {
    let store = mockStore({
      cities: {
        selectedCities: []
      }
    });
    let component = render(
      <Provider store={store}>
        <SelectedCities />
      </Provider>
    );
    const { queryByText } = component;
    const header = queryByText(/selected cities/i);
    expect(header).toBeNull();
    done();
  });
  describe("Tests with at least one city selected", () => {
    let store, component;
    beforeEach(() => {
      store = mockStore({
        cities: {
          selectedCities: [
            { id: 1, name: "Albany", state: "NY" },
            { id: 2, name: "Allegheny", state: "PA" },
            { id: 3, name: "Brooklyn", state: "NY" }
          ]
        }
      });
      store.dispatch = jest.fn();
      component = render(
        <Provider store={store}>
          <SelectedCities />
        </Provider>
      );
    });

    it("Renders navbar without errors", () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <Provider store={store}>
          <SelectedCities />
        </Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });

    // it("Opens and closes when the button is pressed", async done => {
    //   const { findByTestId } = component;
    //   const visibilityButton = await findByTestId("floating-visibility-button");
    //   fireEvent.click(visibilityButton);
    //   expect(store.dispatch).toHaveBeenCalledTimes(1);
    //   expect(store.dispatch).toHaveBeenCalledWith(toggleDrawer());
    //   fireEvent.click(visibilityButton);
    //   expect(store.dispatch).toHaveBeenCalledTimes(2);
    //   expect(store.dispatch).toHaveBeenCalledWith(toggleDrawer());
    //   done();
    // });
  });
});
