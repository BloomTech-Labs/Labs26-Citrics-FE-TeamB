// React
import React from "react";
import { connect } from "react-redux";
import { closeDrawer, openDrawer } from "../../../state/actions";

import RenderAboutPage from "./RenderAboutPage";

class AboutPageContainer extends React.Component {
  componentDidMount() {
    // When the page loads, close drawer for better visibility
    this.props.closeDrawer();
  }

  returnToHome = () => {
    // If not on mobile, re-open drawer
    if (window.innerWidth > 1000) this.props.openDrawer();
    // Go to the homepage
    this.props.history.push("/");
  };

  render() {
    return <RenderAboutPage returnToHome={this.returnToHome} />;
  }
}

export default connect(null, { closeDrawer, openDrawer })(AboutPageContainer);
