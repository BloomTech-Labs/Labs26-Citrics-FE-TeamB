import React from "react";
import { Modal } from "antd";
import { CityDetailPage } from "../pages/CityDetail";

export default function ModalComponent({ visible, setVisible }) {
  return (
    <>
      <Modal
        title="Detailed City Info"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <CityDetailPage />
      </Modal>
    </>
  );
}
