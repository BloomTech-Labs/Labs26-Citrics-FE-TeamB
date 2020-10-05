import React from "react";
import { Button, Modal } from "antd";
import { CityDetailPage } from "../CityDetail";

const ModalComponent = ({ visible, setVisible, city }) => {
  return (
    <>
      {/* Checks to see if theres something in city object */}
      {city ? (
        <Modal
          centered
          visible={visible}
          onOk={setVisible}
          onCancel={setVisible}
          style={{ top: 20 }}
          width={1000}
          footer={[
            <Button type="primary" key="close" onClick={setVisible}>
              Close
            </Button>
          ]}
        >
          <CityDetailPage city={city} />
        </Modal>
      ) : // Returns null if nothing is in it
      null}
    </>
  );
};

export default ModalComponent;
