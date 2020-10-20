import React, { useState } from "react";

import { Card, Avatar, Modal, Button, Divider } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined
} from "@ant-design/icons";

import projectLead from "../../../styles/icons/projectLead.jpg";
import dataScience from "../../../styles/icons/dataScience.png";
import webDev from "../../../styles/icons/webDev.png";
const avatars = {
  "Team Project Lead": projectLead,
  "Data Scientist": dataScience,
  "Web Developer": webDev
};
const { Meta } = Card;

export default function ProfileCard({
  name,
  role,
  image,
  altImage,
  github,
  email,
  linkedin,
  details
}) {
  const [isVisible, setVisibility] = useState(false);
  const [cardImage, setCardImage] = useState(image);
  return (
    <Card
      className={name.split(" ")[0]}
      style={{ width: 250 }}
      cover={
        <img
          alt={name}
          src={cardImage}
          onMouseOver={() => setCardImage(altImage ?? image)}
          onMouseOut={() => setCardImage(image)}
        />
      }
      actions={[
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GithubOutlined key="github" />
        </a>,
        <a href={email} target="_blank" rel="noopener noreferrer">
          <MailOutlined key="email" />
        </a>,
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined key="linkedin" />
        </a>
      ]}
    >
      <Meta
        avatar={<Avatar src={avatars[role]} />}
        title={name}
        description={role}
      />

      {/* Modal functionality */}
      <Button
        className="modal-button"
        type="primary"
        onClick={() => setVisibility(true)}
      >
        About me
      </Button>
      <Modal
        id="inside-modal"
        title="About me"
        centered
        visible={isVisible}
        onOk={() => setVisibility(false)}
        onCancel={() => setVisibility(false)}
        footer={[
          <Button
            type="primary"
            key="close"
            onClick={() => setVisibility(false)}
          >
            Close
          </Button>
        ]}
      >
        {details.map(({ header, body }) => (
          <>
            {header && <Divider>{header}</Divider>}
            {body}
          </>
        ))}
        <div
          className="inner-buttons"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          <Button href={email} target="_blank" rel="noopener noreferrer">
            Email
          </Button>
          <Button href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Button>
        </div>
      </Modal>
    </Card>
  );
}
