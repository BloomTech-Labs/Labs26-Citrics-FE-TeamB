import React from "react";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";
import { CityDetailPage } from "../CityDetail";
import LoadingComponent from "../../common/LoadingComponent";

class CityPage extends React.Component {
  state = { city: {} };
  async componentDidMount() {
    const { id } = this.props.match.params;
    // If we don't have cached data on this city, retrieve it
    if (!this.props.cityDetails[id]) {
      // We need to wait for getCityDetails to finish before proceeding
      await this.props.getCityDetails({ id, name: "Testing" });
    }
    this.setState({ city: this.props.cityDetails[id] });
  }
  componentDidUpdate(prevProps) {
    // If component remained mounted but user changed the cityId
    // Update the city info to match the new city
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.componentDidMount();
    }
  }
  render() {
    return this.state.city?.name ? (
      <CityDetailPage city={this.state.city} />
    ) : (
      <LoadingComponent message={"Retrieving City Data... "} />
    );
  }
}
const mapPropsToState = (
  { cities: { selectedCities, cityDetails } },
  props
) => ({ selectedCities, cityDetails, ...props });
export default connect(mapPropsToState, { getCityDetails })(CityPage);
