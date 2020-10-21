import React from "react";
import { Button, Modal } from "antd";
import CityDetailPane from "./CityDetailContainer";

// A controlled Modal component to display CityDetails in a pleasing format
const CityDetailModal = ({ visible, toggleModal, city = {} }) => {
  return (
    <Modal
      centered
      visible={visible}
      onOk={toggleModal}
      onCancel={toggleModal}
      style={{ top: 20 }}
      width={1000}
      footer={[
        <Button type="primary" key="close" onClick={toggleModal}>
          Close
        </Button>
      ]}
    >
      <CityDetailPane city={city} insideModal={true} />
    </Modal>
  );
};

export default CityDetailModal;
