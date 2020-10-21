import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
//Styles
import "antd/dist/antd.less";
import "./styles/LESS/index.less";
//Pages
import { NotFoundPage } from "./components/pages/NotFound";
import { NavPage } from "./components/pages/Nav";
import { HomePage } from "./components/pages/Home";
import { AdvancedSearchPage } from "./components/pages/AdvancedSearch";
import { MainPageContainer } from "./components/pages/MainPageContainer";
import { ComparisonPage } from "./components/pages/Comparison";
import { CityPage } from "./components/pages/CityPage";
import { AboutPage } from "./components/pages/AboutPage";
import { Provider } from "react-redux";
import { store } from "./state";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  // const history = useHistory();

  // const authHandler = () => {
  //   // We pass this to our <Security /> component that wraps our routes.
  //   // It'll automatically check if userToken is available and push back to login if not :)
  //   history.push('/login');
  // };

  return (
    <>
      <Switch>
        {/* The HomePage isn't wrapped inside MainPageContainer, so it won't move with the sidebar. */}
        <Route path="/" exact render={params => <HomePage {...params} />} />

        {/* These components are wrapped in MainPageContainer */}
        {/* When the navigation drawer moves, MainPageContainer moves with it on desktop view. */}
        <Route
          path="/comparison-page"
          render={p => (
            <MainPageContainer>
              <ComparisonPage {...p} />
            </MainPageContainer>
          )}
        />
        <Route
          path="/advanced-search"
          render={p => (
            <MainPageContainer>
              <AdvancedSearchPage {...p} />
            </MainPageContainer>
          )}
        />
        <Route
          exact
          path="/city-detail-page"
          render={() => <Redirect to="/" />}
        />
        <Route
          path="/city-detail-page/:id"
          render={p => (
            <MainPageContainer>
              <CityPage {...p} />
            </MainPageContainer>
          )}
        />
        <Route
          path="/about"
          render={p => (
            <MainPageContainer>
              <AboutPage {...p} />
            </MainPageContainer>
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <NavPage />
    </>
  );
}
