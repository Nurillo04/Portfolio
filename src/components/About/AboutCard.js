import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> Nurillo Aminjonov </span>
            from <span className="purple"> Fergana, Uzbekistan .</span>
            <p>
              I am creative Frontend-developer and I am excited about creating
              stunning websites. My expertise lies in translating designs into
              fully functional websites while utilizing my development skills to
              enhance and customize their features. My goal is to craft visually
              appealing, user-friendly websites that provide a seamless browsing
              experience.
            </p>
            <span className="purple">Education</span>
            <p>
              Tashkent University of Information Technologies TUIT - Master's
              degree
            </p>
            <p>
              Tashkent University of Information Technologies TUIT - Bachelor's
              degree
            </p>
            I have completed <span>Najot Ta'lim.</span>
            <br /> <br />
            <span className="purple">Soft skills</span>
            <p>
              Communication, Teamwork, Search skills, Responsibility, Loyalty,
              Problem-solving...
            </p>
            <br />
            <span className="purple">
              {" "}
              Apart from coding, some other activities that I love to do!
            </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
