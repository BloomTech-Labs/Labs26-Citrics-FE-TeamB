// Library imports
import React from "react";
import { Button } from "antd";

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

const RenderAboutPage = ({ returnToHome }) => {
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
        <ProfileCard {...lyndsiData} />

        {/* Rachele */}
        <ProfileCard {...racheleData} />
      </section>
    </div>
  );
};

export default RenderAboutPage;
