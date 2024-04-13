import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What I Did?<strong className="purple"> Look at Below </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              // isBlog={false}
              title="CheetChat"
              description="CheeChat is an innovative chatroom application developed using React.js and Firebase. It provides users with a seamless platform to engage in real-time communication, fostering connections and collaboration. With its intuitive interface and robust backend powered by Firebase, CheeChat offers a reliable and efficient solution for individuals and groups to interact effortlessly."
              ghLink="https://github.com/ivpankaj/cheet-chat"
              demoLink="https://cheetchat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Shortler"
              description="Shortler is a React-based web application that leverages AI technology to provide concise summaries of news articles. With Shortler, users can quickly digest the key points of lengthy articles, saving time and effort while staying informed about the latest news."
              ghLink="https://github.com/ivpankaj/Shortler"
              demoLink="https://shortler.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Doordesh"
              description="DoorDesh is a dynamic travel website designed to inspire wanderlust and facilitate seamless travel planning. With its user-friendly interface and comprehensive features, DoorDesh empowers travelers to discover new destinations, plan their trips efficiently, and embark on unforgettable adventures around the globe."
              ghLink="https://github.com/ivpankaj/Doordesh"
              demoLink="https://doordesh.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Cartler"
              description="Cartler is a cutting-edge e-commerce platform built using React.js, offering a seamless shopping experience for users worldwide. With its sleek design, robust features, and intuitive user interface, Cartler empowers both businesses and consumers to engage in effortless online transactions, making shopping a breeze."
              ghLink="https://github.com/ivpankaj/cartler"
              demoLink="https://cartler.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Mousome"
              description="Mousome is a sleek and intuitive weather application developed using React Native, designed to provide users with accurate weather forecasts and essential meteorological information. With its user-friendly interface and customizable features, Mousome offers a seamless way for users to stay informed about current and upcoming weather conditions, whether at home or while traveling."
              ghLink="https://github.com/ivpankaj/mousome-react-native"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Complete Social Media App Backend"
              description="It is a robust backend solution for a social media application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a scalable and efficient architecture to support the core functionalities of a social media platform, including user management, post creation, commenting, liking, and following/follower relationships."
              ghLink="https://github.com/ivpankaj/backend"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
