import React, { useState } from "react";
import { Drawer, Button, Radio, Space } from "antd";

export default function NavContainer(props) {
  //import antdesign for drawer
  //implement drawer for navbar feature
  //create search bar form

  // state = { visible: false, placement: 'left' };
  const [state, setState] = useState({
    visible: false,
    placement: "left"
  });

  const showDrawer = () => {
    setState({
      visible: true
    });
  };

  const onClose = () => {
    setState({
      visible: false
    });
  };

  const onChange = e => {
    setState({
      placement: e.target.value
    });
  };

  const { placement, visible } = state;
  return (
    <>
      <Space>
        <Radio.Group defaultValue={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
