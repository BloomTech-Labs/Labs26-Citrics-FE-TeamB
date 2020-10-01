// React
import React from "react";
// Placeholder loading component
// import LoadingComponent from '../../common/LoadingComponent';
// About page
import AboutPageContainer from "./AboutPageContainer";
// Styling
import { Card, Avatar } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined
} from "@ant-design/icons";

const { Meta } = Card;

const RenderAboutPage = ({ isLoading }) => {
  return (
    <div className="about-container">
      {/*  Use this is loading component is needed
      {isLoading ? (
        <LoadingComponent message={"Retrieving About Page..."} />
      ) : (
        <AboutPageContainer />
      )}
      */}

      {/* ----- Team cards ----- */}

      <section className="about-tpl">
        {/* TPL - Bhavani */}
        <Card
          style={{ width: 200 }}
          cover={
            <img alt="Bhavani Rajan" src="https://i.imgur.com/9TcokzL.png" />
          }
          actions={[
            <GithubOutlined key="github" />,
            <MailOutlined key="email" />,
            <LinkedinOutlined key="linkedin" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Team Project Lead"
            description="This is the description"
          />
        </Card>
      </section>

      {/* Data Science - Ekram, Zack */}

      <section className="about-ds">
        {/* Ekram */}
        <Card
          style={{ width: 200 }}
          cover={
            <img alt="Ekram Ahmed" src="https://i.imgur.com/vBnpIEC.png" />
          }
          actions={[
            <GithubOutlined key="github" />,
            <MailOutlined key="email" />,
            <LinkedinOutlined key="linkedin" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Data Scientist"
            description="This is the description"
          />
        </Card>

        {/* Zack */}
        <Card
          style={{ width: 200 }}
          cover={
            <img alt="Zack Murray" src="https://i.imgur.com/jaELQtg.png" />
          }
          actions={[
            <GithubOutlined key="github" />,
            <MailOutlined key="email" />,
            <LinkedinOutlined key="linkedin" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Data Scientist"
            description="This is the description"
          />
        </Card>
      </section>

      {/* Web - Alan, David, Lyndsi, Rachele */}

      <section className="about-web">
        {/* Alan */}
        <Card
          style={{ width: 200 }}
          cover={<img alt="Alan Lee" src="https://i.imgur.com/ueHbN2x.png" />}
          actions={[
            <GithubOutlined key="github" />,
            <MailOutlined key="email" />,
            <LinkedinOutlined key="linkedin" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Web Developer"
            description="This is the description"
          />
        </Card>

        {/* David */}
        <Card
          style={{ width: 200 }}
          cover={
            <img alt="David Horstman" src="https://i.imgur.com/jF51x65.png" />
          }
          actions={[
            <GithubOutlined key="github" />,
            <MailOutlined key="email" />,
            <LinkedinOutlined key="linkedin" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Web Developer"
            description="This is the description"
          />
        </Card>

        {/* Lyndsi */}
        <Card
          style={{ width: 200 }}
          cover={
            <img alt="Lyndsi Williams" src="https://i.imgur.com/KpOZXeg.png" />
          }
          actions={[
            <GithubOutlined key="github" />,
            <MailOutlined key="email" />,
            <LinkedinOutlined key="linkedin" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Web Developer"
            description="This is the description"
          />
        </Card>

        {/* Rachele */}
        <Card
          style={{ width: 200 }}
          cover={
            <img alt="Rachele Edwards" src="https://i.imgur.com/UR0sA0t.png" />
          }
          actions={[
            <GithubOutlined key="github" />,
            <MailOutlined key="email" />,
            <LinkedinOutlined key="linkedin" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Web Developer"
            description="This is the description"
          />
        </Card>
      </section>
    </div>
  );
};

export default RenderAboutPage;
