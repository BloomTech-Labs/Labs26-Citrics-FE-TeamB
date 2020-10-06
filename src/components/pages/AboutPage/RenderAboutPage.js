// Library imports
import React from "react";
// Placeholder loading component
// import LoadingComponent from '../../common/LoadingComponent';
// About page
// import AboutPageContainer from "./AboutPageContainer";
// Styling
import { Card, Avatar } from "antd";
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
            title="Team Project Lead"
            description="This is the description"
          />
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
            <MailOutlined key="email" />,
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
            title="Data Scientist"
            description="This is the description"
          />
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
            title="Data Scientist"
            description="This is the description"
          />
        </Card>
      </section>

      {/* Web - Alan, David, Lyndsi, Rachele */}

      <section className="about-web">
        {/* Alan */}
        <Card
          style={{ width: 250 }}
          cover={<img alt="Alan Lee" src="https://i.imgur.com/ueHbN2x.png" />}
          actions={[
            <a
              href="https://github.com/alanblee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <MailOutlined key="email" />,
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
            title="Web Developer"
            description="This is the description"
          />
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
            title="Web Developer"
            description="This is the description"
          />
        </Card>

        {/* Lyndsi */}
        <Card
          hoverable
          style={{ width: 250 }}
          cover={
            <img alt="Lyndsi Williams" src="https://i.imgur.com/KpOZXeg.png" />
          }
          actions={[
            <a
              href="https://github.com/lyndsiWilliams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <MailOutlined key="email" />,
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
            title="Web Developer"
            description="This is the description"
          />
        </Card>

        {/* Rachele */}
        <Card
          style={{ width: 250 }}
          cover={
            <img alt="Rachele Edwards" src="https://i.imgur.com/UR0sA0t.png" />
          }
          actions={[
            <a
              href="https://github.com/berachele"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <MailOutlined key="email" />,
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
            title="Web Developer"
            description="This is the description"
          />
        </Card>
      </section>
    </div>
  );
};

export default RenderAboutPage;
