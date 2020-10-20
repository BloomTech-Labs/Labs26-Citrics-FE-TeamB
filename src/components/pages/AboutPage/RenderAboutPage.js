// Library imports
import React, { useState } from "react";
// Styling
import { Card, Avatar, Modal, Button, Divider } from "antd";

import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined
} from "@ant-design/icons";
import dataScience from "../../../styles/icons/dataScience.png";
import webDev from "../../../styles/icons/webDev.png";

import ProfileCard from "./ProfileCard";
import {
  bhavaniData,
  ekramData,
  zackData,
  alanData,
  davidData,
  lyndsiData,
  racheleData
} from "./profileData";

const { Meta } = Card;

const RenderAboutPage = ({ returnToHome }) => {
  // Modal state
  const [ekramModalVisibility, setEkramModalVisibility] = useState(false);
  const [zackModalVisibility, setZackModalVisibility] = useState(false);
  const [alanModalVisibility, setAlanModalVisibility] = useState(false);
  const [davidModalVisibility, setDavidModalVisibility] = useState(false);
  const [lyndsiModalVisibility, setLyndsiModalVisibility] = useState(false);
  const [racheleModalVisibility, setRacheleModalVisibility] = useState(false);
  return (
    <div className="about-container">
      <Button className="home-btn" onClick={returnToHome}>
        Home
      </Button>
      {/* ----- Introduction ----- */}
      <section className="about-introduction">
        <h1>The Citrics Team</h1>
        <h3>
          We are a cross-functional team of 7 data scientists and web developers
          from Lambda School. Check out the links below to learn more about our
          tracks:
        </h3>
        <div className="intro-btns">
          <Button
            href="https://lambdaschool.com/courses/data-science"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Science
          </Button>
          <Button
            href="https://lambdaschool.com/courses/full-stack-web-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Stack Web Development
          </Button>
        </div>
        <h3>
          We collaborated with our stakeholder through our project lead to
          produce his product vision of Citrics in a span of 8 weeks. Check out
          our cards below to learn more about the team!
        </h3>
      </section>

      {/* ----- Team cards ----- */}

      <section className="about-tpl-ds">
        {/* TPL - Bhavani */}
        <ProfileCard {...bhavaniData} />

        {/* Data Science - Ekram, Zack */}

        {/* Ekram */}
        <ProfileCard {...ekramData} />

        {/* Zack */}
        <ProfileCard {...zackData} />
      </section>

      {/* Web - Alan, David, Lyndsi, Rachele */}

      <section className="about-web">
        {/* Alan */}
        <ProfileCard {...alanData} />

        {/* David */}
        <ProfileCard {...davidData} />

        {/* Lyndsi */}
        <Card
          className="Lyndsi"
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
            onClick={() => setLyndsiModalVisibility(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={lyndsiModalVisibility}
            onOk={() => setLyndsiModalVisibility(false)}
            onCancel={() => setLyndsiModalVisibility(false)}
          >
            <p>
              I am a full-stack web developer with a strong love for Front End.
              My passion for programming shows in my late-night adventures
              getting lost in my latest project. I ensure sustainable working
              practices by investing in breaks that typically involve video
              games. The Pomodoro technique will save your life in this career!
            </p>
            <Divider>Teamwork makes the dream work</Divider>
            <p>
              I am an eager worker and a team player! Good communication is one
              of the most important aspects to an efficient, productive team. I
              have seen amazing things produced from teams that took the extra
              effort to meet and plan properly - these tactics are vital to a
              proper working environment!
            </p>
            <Divider>Contact</Divider>
            <div
              className="inner-buttons"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                href="https://github.com/lyndsiWilliams"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href="mailto:lyndsikaywilliams@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </Button>
              <Button
                href="https://www.linkedin.com/in/lyndsiwilliams/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </Modal>
        </Card>

        {/* Rachele */}
        <Card
          className="Rachele"
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
            onClick={() => setRacheleModalVisibility(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={racheleModalVisibility}
            onOk={() => setRacheleModalVisibility(false)}
            onCancel={() => setRacheleModalVisibility(false)}
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
            <Divider>Fun fact</Divider>
            <p>
              “Not a daredevil, but love adventure! I enjoy many outdoor
              activities with family such as dirt-biking, Jeeping, and
              snowboarding”
            </p>
            <Divider>Contact</Divider>
            <div
              className="inner-buttons"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                href="https://github.com/berachele"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href="mailto:berachele425@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </Button>
              <Button
                href="https://www.linkedin.com/in/berachele/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </Modal>
        </Card>
      </section>
    </div>
  );
};

export default RenderAboutPage;
