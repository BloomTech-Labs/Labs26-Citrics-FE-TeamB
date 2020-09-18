//Library imports
import React from "react";
import RenderComparison from "./RenderComparison";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";

class ComparisonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCities: this.parseSelectedCities(props),
      citiesData: []
    };
  }
  componentDidMount() {
    this.retrieveCityDataIfNeeded(this.state.selectedCities);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      const selectedCities = this.parseSelectedCities(this.props);
      this.setState({ selectedCities });
      this.retrieveCityDataIfNeeded(selectedCities);
    }
  }
  parseSelectedCities = props => {
    const queryParams = new URLSearchParams(props.location.search);
    const selectedCities = Array.from(queryParams.values()).map(id =>
      Number(id)
    );
    // console.log("selectedCities", selectedCities);
    return selectedCities;
  };
  retrieveCityDataIfNeeded = async selectedCities => {
    for (const id of selectedCities) {
      if (!this.props.cityDetails[id]) {
        await this.props.getCityDetails({ id, name: "Testing" });
      }
    }
    let citiesData = selectedCities.map(id => this.props.cityDetails[id]);
    // console.log("citiesData", citiesData);
    this.setState({ citiesData });
  };
  render() {
    return this.state.selectedCities.length < 2 ? (
      <Redirect to="/" />
    ) : (
      <div className="comparison-container">
        <RenderComparison citiesData={this.state.citiesData} />
      </div>
    );
  }
}
const mapState = ({ cities: { cityDetails } }, props) => ({
  ...props,
  cityDetails
});
export default connect(mapState, { getCityDetails })(ComparisonContainer);
