import React from "react";
import { Modal } from "antd";
import { CityDetailPage } from "../CityDetail";

const ModalComponent = ({ visible, setVisible, city }) => {
  return (
    <>
      {/* Checks to see if theres something in city object */}
      {city ? (
        <Modal
          centered
          visible={visible}
          onOk={() => setVisible()}
          onCancel={() => setVisible()}
          style={{ top: 20 }}
          width={1000}
        >
          <CityDetailPage city={city} />
        </Modal>
      ) : // Returns null if nothing is in it
      null}
    </>
  );
};

export default ModalComponent;
