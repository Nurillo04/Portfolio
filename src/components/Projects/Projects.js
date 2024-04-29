import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Book from "../../Assets/Projects/Screenshot_4.png";
import Avion from "../../Assets/Projects/Screenshot_6.png";
import Severyanochka from "../../Assets/Projects/Screenshot_3.png";
import AlifShop from "../../Assets/Projects/Screenshot_1.png";
import Countries from "../../Assets/Projects/Screenshot_5.png";
import AdminImg from "../../Assets/Projects/Screenshot_2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlifShop}
              isBlog={false}
              title="ALIF SHOP"
              ghLink="https://github.com/Nurillo04/alif_shop-main"
              demoLink="https://alif-shop-main.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AdminImg}
              isBlog={false}
              title="ADMIN DASHBOARD"
              ghLink="https://github.com/Nurillo04/MUI-Admin_panel.git"
              demoLink="https://mui-admin-panel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Severyanochka}
              isBlog={false}
              title="SEVERYANOCHKA"
              ghLink="https://github.com/Nurillo04/e-commerce-dom-main--"
              demoLink="https://e-commerce-dom-main.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Avion}
              isBlog={false}
              title="AVION SHOP"
              ghLink="https://github.com/Nurillo04/avion"
              demoLink="https://avion-ecommerce-store.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Countries}
              isBlog={false}
              title="MOVIE"
              ghLink="https://github.com/Nurillo04/Movie.git"
              demoLink="https://movie-pi-sooty.vercel.app/upcoming"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="BOOK STORE ( Landing Page )"
              ghLink="https://github.com/Nurillo04/eatly.git"
              demoLink="https://eatly-ten.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
