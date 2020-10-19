import React from "react";
import { Button, Modal } from "antd";
import { CityDetailPage } from "../pages/CityDetail";

const ModalComponent = ({ visible, toggleModal, city }) => {
  city = city ?? {};
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
      <CityDetailPage city={city} />
    </Modal>
  );
};

export default ModalComponent;
