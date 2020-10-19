// Library imports
import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { closeDrawer } from "../../../state/actions";
// Styling
import { Card, Avatar, Modal, Button, Divider } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined
} from "@ant-design/icons";
import projectLead from "../../../styles/icons/projectLead.jpg";
import dataScience from "../../../styles/icons/dataScience.png";
import webDev from "../../../styles/icons/webDev.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const RenderAboutPage = ({ closeDrawer }) => {
  // Modal state
  const [bhavaniModalVisibility, setBhavaniModalVisibility] = useState(false);
  const [ekramModalVisibility, setEkramModalVisibility] = useState(false);
  const [zackModalVisibility, setZackModalVisibility] = useState(false);
  const [alanModalVisibility, setAlanModalVisibility] = useState(false);
  const [davidModalVisibility, setDavidModalVisibility] = useState(false);
  const [lyndsiModalVisibility, setLyndsiModalVisibility] = useState(false);
  const [racheleModalVisibility, setRacheleModalVisibility] = useState(false);

  // This closes the drawer when the user is on the page
  useEffect(() => {
    closeDrawer();
  }, [closeDrawer]);

  return (
    <div className="about-container">
      <Button className="home-btn">
        <Link to="/">Home</Link>
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
            onClick={() => setBhavaniModalVisibility(true)}
          >
            About me
          </Button>
          <Modal
            id="inside-modal"
            title="About me"
            centered
            visible={bhavaniModalVisibility}
            onOk={() => setBhavaniModalVisibility(false)}
            onCancel={() => setBhavaniModalVisibility(false)}
          >
            <p>
              Data Scientist with a background is as a Java Programmer with 3
              years of corporate experience. I studied at Lambda School,
              currently working as a Technical Project Lead at Lambda School to
              support the learning and professional growth of other Lambda
              students while deepening my skills in Data Science. My skill set
              includes Data Analysis, Machine Learning Engineering, Predictive
              Analysis, Recommendation Systems, and Data Engineering. I'm
              excited to take on a new challenge in the Data Science universe.
            </p>
            <Divider>Technical Skills</Divider>
            <p>
              Programming Expertise: ​Python (NumPy, Pandas,
              Scikit-learn,Matplotlib, Seaborn), R, Java, SQL, PostgreSQL,
              MongoDb, AS/400, DB2/400 and Excel
            </p>
            <p>Frameworks: ​TensorFlow, Keras, Flask, Fast API</p>
            <p>
              Skills​: Data analysis, Predictive analytics, Linear and
              multivariate regressions, K-cluster analysis, Classification,
              Machine learning products, Natural language processing, Neural
              Networks, Github, Amazon EBS, Heroku
            </p>
            <Divider>Hobbies</Divider>
            <p>Painting and gardening</p>
            <img
              alt="Bhavani's paintings"
              src="https://i.imgur.com/C9JQEKZ.png"
            />
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

        {/* Data Science - Ekram, Zack */}

        {/* Ekram */}
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="Ekram Ahmed"
              src="https://i.imgur.com/vBnpIEC.png"
              onMouseOver={e =>
                (e.currentTarget.src = "https://i.imgur.com/4haF4Tz.png")
              }
              onMouseOut={e => {
                e.currentTarget.src = "https://i.imgur.com/vBnpIEC.png";
              }}
            />
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
            onClick={() => setEkramModalVisibility(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={ekramModalVisibility}
            onOk={() => setEkramModalVisibility(false)}
            onCancel={() => setEkramModalVisibility(false)}
          >
            <p>
              With a background in Maritime science and Marine engineering, and
              being blessed of having the opportunity of working onboard
              ocean-going vessel, I and eager to utilize my knowledge and
              experience towards my new career of Data Science. I want to learn
              new technical skills in data science, enhance my knowledge in
              ocean & marine science and keep educating myself in order to
              fulfill my ultimate goal, which is to have a humble contribution
              towards ocean sustainability.
            </p>
            <Divider>Contact</Divider>
            <div
              className="inner-buttons"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                href="https://github.com/Ekram49"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href="mailto:ekramullahzaki@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </Button>
              <Button
                href="https://www.linkedin.com/in/ekram-ullah-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </Modal>
        </Card>

        {/* Zack */}
        <Card
          className="Zack"
          style={{ width: 250 }}
          cover={
            <img
              alt="Zack Murray"
              src="https://i.imgur.com/jaELQtg.png"
              onMouseOver={e =>
                (e.currentTarget.src = "https://i.imgur.com/TgKYmKI.png")
              }
              onMouseOut={e => {
                e.currentTarget.src = "https://i.imgur.com/jaELQtg.png";
              }}
            />
          }
          actions={[
            <a
              href="https://github.com/zack-murray"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <a
              href="mailto:zachery.murray@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlined key="email" />
            </a>,
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
            onClick={() => setZackModalVisibility(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={zackModalVisibility}
            onOk={() => setZackModalVisibility(false)}
            onCancel={() => setZackModalVisibility(false)}
          >
            <p>
              Data scientist with a passion for solving problems and exploring
              algorithms. Friendship ended with SQL, now machine learning is my
              best friend. Just kidding, I still love you SQL. Have a background
              in business management and customer service, both are very
              important to me and have been instrumental in molding the
              programmer I am today. Physically present in CT, but my heart
              still resides in CO.
            </p>
            <Divider>Contact</Divider>
            <div
              className="inner-buttons"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                href="https://github.com/zack-murray"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href="mailto:zachery.murray@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </Button>
              <Button
                href="https://www.linkedin.com/in/zack-murray/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
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
            onClick={() => setAlanModalVisibility(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={alanModalVisibility}
            onOk={() => setAlanModalVisibility(false)}
            onCancel={() => setAlanModalVisibility(false)}
          >
            <p>
              Motivated developer with experience creating custom websites.
              Strong collaboration skills required to deliver projects on time
              while working with diverse remote teams. Outside of the code, I
              enjoy being out in nature hiking and rock climbing.
            </p>
            <Divider>Contact</Divider>
            <div
              className="inner-buttons"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                href="https://github.com/alanblee"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href="mailto:alanbenlee12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </Button>
              <Button
                href="https://www.linkedin.com/in/alanlee321/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </Modal>
        </Card>

        {/* David */}
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="David Horstman"
              src="https://i.imgur.com/jF51x65.png"
              onMouseOver={e =>
                (e.currentTarget.src = "https://i.imgur.com/1QHV5FV.png")
              }
              onMouseOut={e => {
                e.currentTarget.src = "https://i.imgur.com/jF51x65.png";
              }}
            />
          }
          actions={[
            <a
              href="https://github.com/ddhorstman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined key="github" />
            </a>,
            <a
              href="mailto:horstmandd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlined key="email" />
            </a>,
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
            onClick={() => setDavidModalVisibility(true)}
          >
            About me
          </Button>
          <Modal
            title="About me"
            centered
            visible={davidModalVisibility}
            onOk={() => setDavidModalVisibility(false)}
            onCancel={() => setDavidModalVisibility(false)}
          >
            <p>
              Software Engineer with strong programming skills and broad
              experience, currently specialized in Web Development. Background
              in computer science education and research science. Recent Lambda
              School graduate with an MA in Chemistry from Columbia and a BS in
              Biochemistry from UCSD.
            </p>
            <Divider>Jack of many trades, master of some</Divider>
            <p>
              Currently Full Stack Web Developer, previously High School
              engineering teacher and Biophysical Chemist. Avid tinkerer,
              singer, dancer, and hiker. I love pushing myself to learn new
              languages and take on difficult challenges; if I'm not outside my
              comfort zone, I'm not having fun.
            </p>
            <Divider>Contact</Divider>
            <div
              className="inner-buttons"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                href="https://github.com/ddhorstman"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href="mailto:horstmandd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </Button>
              <Button
                href="https://www.linkedin.com/in/david-horstman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </Modal>
        </Card>

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

export default connect(null, { closeDrawer })(RenderAboutPage);
