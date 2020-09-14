import React from "react";
import { Modal } from "antd";
import { CityDetailPage } from "../pages/CityDetail";

export default function ModalComponent({ visible, setVisible, city }) {
  return (
    <>
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
    </>
  );
}
