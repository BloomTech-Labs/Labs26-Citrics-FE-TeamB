import React from "react";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";
import CityDetail from "../Comparison/Modal";

class CityDetailModal extends React.Component {
  fetchDataIfNeeded = () => {
    const { id } = this.props;
    // If we don't have cached data on this city, retrieve it
    if (!this.props.cityDetails[id]) {
      // We need to wait for getCityDetails to finish before proceeding
      this.props.getCityDetails({ id });
    }
  };

  componentDidMount() {
    this.fetchDataIfNeeded();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchDataIfNeeded();
    }
  }
  render() {
    const { id, cityDetails, visible, setVisible } = this.props;
    return (
      <CityDetail
        city={cityDetails[id]}
        visible={visible}
        setVisible={setVisible}
      />
    );
  }
}
const mapProps = ({ cities: { cityDetails } }, props) => ({
  ...props,
  cityDetails
});
export default connect(mapProps, { getCityDetails })(CityDetailModal);
