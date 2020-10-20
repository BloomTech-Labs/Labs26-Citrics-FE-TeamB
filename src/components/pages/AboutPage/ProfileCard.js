import React, { useState } from "react";

import projectLead from "../../../styles/icons/projectLead.jpg";

import { Card, Avatar, Modal, Button, Divider } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined
} from "@ant-design/icons";

const { Meta } = Card;

export default function ProfileCard(props) {
  const [isVisible, setVisibility] = useState(false);
  return (
    <Card
      style={{ width: 250 }}
      cover={
        <img
          alt="Bhavani Rajan"
          src="https://i.imgur.com/9TcokzL.png"
          onMouseOver={e =>
            (e.currentTarget.src = "https://i.imgur.com/fA047dl.png")
          }
          onMouseOut={e => {
            e.currentTarget.src = "https://i.imgur.com/9TcokzL.png";
          }}
        />
      }
      actions={[
        <a
          href="https://github.com/Bhavani-Rajan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined key="github" />
        </a>,
        <a
          href="mailto:bhava.rajan.6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailOutlined key="email" />
        </a>,
        <a
          href="https://www.linkedin.com/in/bhavani-rajan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined key="linkedin" />
        </a>
      ]}
    >
      <Meta
        avatar={<Avatar src={projectLead} />}
        title="Bhavani Rajan"
        description="Team Project Lead"
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
          <Button
            href="https://github.com/Bhavani-Rajan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            href="mailto:bhava.rajan.6@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Button>
          <Button
            href="https://www.linkedin.com/in/bhavani-rajan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </div>
      </Modal>
    </Card>
  );
}
