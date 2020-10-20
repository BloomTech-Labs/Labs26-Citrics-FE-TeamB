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
  linkedin
}) {
  const [isVisible, setVisibility] = useState(false);
  const [cardImage, setCardImage] = useState(image);
  return (
    <Card
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
        <p>
          Data Scientist with a background is as a Java Programmer with 3 years
          of corporate experience. I studied at Lambda School, currently working
          as a Technical Project Lead at Lambda School to support the learning
          and professional growth of other Lambda students while deepening my
          skills in Data Science. My skill set includes Data Analysis, Machine
          Learning Engineering, Predictive Analysis, Recommendation Systems, and
          Data Engineering. I'm excited to take on a new challenge in the Data
          Science universe.
        </p>
        <Divider>Technical Skills</Divider>
        <p>
          Programming Expertise: ​Python (NumPy, Pandas,
          Scikit-learn,Matplotlib, Seaborn), R, Java, SQL, PostgreSQL, MongoDb,
          AS/400, DB2/400 and Excel
        </p>
        <p>Frameworks: ​TensorFlow, Keras, Flask, Fast API</p>
        <p>
          Skills​: Data analysis, Predictive analytics, Linear and multivariate
          regressions, K-cluster analysis, Classification, Machine learning
          products, Natural language processing, Neural Networks, Github, Amazon
          EBS, Heroku
        </p>
        <Divider>Hobbies</Divider>
        <p>Painting and gardening</p>
        <img alt="Bhavani's paintings" src="https://i.imgur.com/C9JQEKZ.png" />
        <Divider>Contact</Divider>
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
