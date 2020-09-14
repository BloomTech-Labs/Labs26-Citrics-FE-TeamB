import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { CityDetailPage } from "../pages/CityDetail";

const ModalComponent = ({ visible, setVisible, singleCity }) => {
  const [city, setCity] = useState(singleCity);
  useEffect(() => {
    setCity(singleCity);
  }, [singleCity]);
  return (
    <>
      {city ? (
        <Modal
          title={`Info for ${city.name}`}
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          style={{ top: 20 }}
          width={1000}
        >
          <CityDetailPage city={city} />
        </Modal>
      ) : null}
    </>
  );
};

const mapState = state => ({
  singleCity: state.cities.singleCityDetails
});

export default connect(mapState, null)(ModalComponent);
