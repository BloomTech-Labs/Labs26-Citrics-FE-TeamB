// Library imports
import React, { useState } from "react";
// Placeholder loading component
// import LoadingComponent from '../../common/LoadingComponent';
// About page
// import AboutPageContainer from "./AboutPageContainer";
// Styling
import { Card, Avatar, Modal, Button } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined
} from "@ant-design/icons";
import projectLead from "../../../styles/icons/projectLead.jpg";
import dataScience from "../../../styles/icons/dataScience.png";
import webDev from "../../../styles/icons/webDev.png";

const { Meta } = Card;

const RenderAboutPage = ({ isLoading }) => {
  // Modal state
  const [modalVisibility, setModalVisibility] = useState(false);

  const setModalVisible = modalVisibility => {
    setModalVisibility(modalVisibility);
  };

  return (
    <div className="about-container">
      {/*  Use this as loading component if needed
      {isLoading ? (
        <LoadingComponent message={"Retrieving About Page..."} />
      ) : (
        <AboutPageContainer />
      )}
      */}

      {/* ----- Introduction ----- */}
      <section className="about-introduction">
        <h1>The Citrics Team</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
          tincidunt euismod. Mauris lacus mi, vulputate eget sem vitae,
          imperdiet consectetur urna. In ante sapien, mattis eu nisi ut,
          malesuada fringilla massa. Ut pulvinar, quam quis interdum convallis,
          sem dolor ullamcorper lacus, vel tristique felis nunc in risus. Duis
          ex dolor, commodo vitae metus ac, egestas tincidunt turpis. Morbi leo
          quam, ornare molestie pellentesque interdum, euismod ut magna. Aliquam
          tincidunt orci vulputate interdum varius.
        </h3>
      </section>

      {/* ----- Team cards ----- */}

      <section className="about-tpl-ds">
        {/* TPL - Bhavani */}
        <Card
          style={{ width: 250 }}
          cover={
            <img alt="Bhavani Rajan" src="https://i.imgur.com/9TcokzL.png" />
          }
          actions={[
            <a
              href="https://github.com/Bhavani-Rajan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <MailOutlined key="email" />,
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
            onClick={() => setModalVisible(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={modalVisibility}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Card>

        {/* Data Science - Ekram, Zack */}

        {/* Ekram */}
        <Card
          style={{ width: 250 }}
          cover={
            <img alt="Ekram Ahmed" src="https://i.imgur.com/vBnpIEC.png" />
          }
          actions={[
            <a
              href="https://github.com/Ekram49"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <a
              href="mailto:ekramullahzaki@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlined key="email" />
            </a>,
            <a
              href="https://www.linkedin.com/in/ekram-ullah-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined key="linkedin" />
            </a>
          ]}
        >
          <Meta
            avatar={<Avatar src={dataScience} />}
            title="Ekram Ahmed"
            description="Data Scientist"
          />

          {/* Modal functionality */}
          <Button
            className="modal-button"
            type="primary"
            onClick={() => setModalVisible(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={modalVisibility}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Card>

        {/* Zack */}
        <Card
          style={{ width: 250 }}
          cover={
            <img alt="Zack Murray" src="https://i.imgur.com/jaELQtg.png" />
          }
          actions={[
            <a
              href="https://github.com/zack-murray"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <MailOutlined key="email" />,
            <a
              href="https://www.linkedin.com/in/zack-murray/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined key="linkedin" />
            </a>
          ]}
        >
          <Meta
            avatar={<Avatar src={dataScience} />}
            title="Zack Murray"
            description="Data Scientist"
          />

          {/* Modal functionality */}
          <Button
            className="modal-button"
            type="primary"
            onClick={() => setModalVisible(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={modalVisibility}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Card>
      </section>

      {/* Web - Alan, David, Lyndsi, Rachele */}

      <section className="about-web">
        {/* Alan */}
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="Alan Lee"
              src="https://i.imgur.com/ueHbN2x.png"
              onMouseOver={e =>
                (e.currentTarget.src = "https://i.imgur.com/ccPPRUD.png")
              }
              onMouseOut={e => {
                e.currentTarget.src = "https://i.imgur.com/ueHbN2x.png";
              }}
            />
          }
          actions={[
            <a
              href="https://github.com/alanblee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <a
              href="mailto:alanbenlee12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlined key="email" />
            </a>,
            <a
              href="https://www.linkedin.com/in/alanlee321/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined key="linkedin" />
            </a>
          ]}
        >
          <Meta
            avatar={<Avatar src={webDev} />}
            title="Alan Lee"
            description="Web Developer"
          />

          {/* Modal functionality */}
          <Button
            className="modal-button"
            type="primary"
            onClick={() => setModalVisible(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={modalVisibility}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Card>

        {/* David */}
        <Card
          style={{ width: 250 }}
          cover={
            <img alt="David Horstman" src="https://i.imgur.com/jF51x65.png" />
          }
          actions={[
            <a
              href="https://github.com/ddhorstman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <MailOutlined key="email" />,
            <a
              href="https://www.linkedin.com/in/david-horstman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined key="linkedin" />
            </a>
          ]}
        >
          <Meta
            avatar={<Avatar src={webDev} />}
            title="David Horstman"
            description="Web Developer"
          />

          {/* Modal functionality */}
          <Button
            className="modal-button"
            type="primary"
            onClick={() => setModalVisible(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={modalVisibility}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Card>

        {/* Lyndsi */}
        <Card
          hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="Lyndsi Kay Williams"
              src="https://i.imgur.com/KpOZXeg.png"
              onMouseOver={e =>
                (e.currentTarget.src = "https://i.imgur.com/Dd61zD4.png")
              }
              onMouseOut={e => {
                e.currentTarget.src = "https://i.imgur.com/KpOZXeg.png";
              }}
            />
          }
          actions={[
            <a
              href="https://github.com/lyndsiWilliams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <a
              href="mailto:lyndsikaywilliams@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlined key="email" />
            </a>,
            <a
              href="https://www.linkedin.com/in/lyndsiwilliams/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined key="linkedin" />
            </a>
          ]}
        >
          <Meta
            avatar={<Avatar src={webDev} />}
            title="Lyndsi Kay Williams"
            description="Web Developer"
          />

          {/* Modal functionality */}
          <Button
            className="modal-button"
            type="primary"
            onClick={() => setModalVisible(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={modalVisibility}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Card>

        {/* Rachele */}
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="Rachele Edwards"
              src="https://i.imgur.com/UR0sA0t.png"
              onMouseOver={e =>
                (e.currentTarget.src = "https://i.imgur.com/lXJcpk0.png")
              }
              onMouseOut={e => {
                e.currentTarget.src = "https://i.imgur.com/UR0sA0t.png";
              }}
            />
          }
          actions={[
            <a
              href="https://github.com/berachele"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <a
              href="mailto:berachele425@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlined key="email" />
            </a>,
            <a
              href="https://www.linkedin.com/in/berachele/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined key="linkedin" />
            </a>
          ]}
        >
          <Meta
            avatar={<Avatar src={webDev} />}
            title="Rachele Edwards"
            description="Web Developer"
          />

          {/* Modal functionality */}
          <Button
            className="modal-button"
            type="primary"
            onClick={() => setModalVisible(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={modalVisibility}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>
              Hello, I’m Rachele! I love building functional apps and being able
              to create something that starts with an idea. Backend is my strong
              suit, but I love design and amping out my frontend skills. My
              dream job would be to work with a company that values hard work
              and has a hunger to improve our product and stretches our
              employees to be the best we can be. I truly believe that a
              successful company derives from a team of positive, caring, and
              constructive employees.
            </p>
            <p>
              Fun fact about Rachele: “Not a daredevil, but love adventure! I
              enjoy many outdoor activities with family such as dirt-biking,
              Jeeping, and snowboarding”
            </p>
          </Modal>
        </Card>
      </section>
    </div>
  );
};

export default RenderAboutPage;
